/**
 * THE CHAIN ROOM (TCR) - SYNC BACKEND
 * ------------------------
 * A tiny free API, backed by a Google Sheet in your Drive, that both the
 * workshop app and the client app read/write to. This is what keeps both
 * sides in sync.
 *
 * SETUP (one-time, ~3 minutes):
 * 1. Go to https://sheets.google.com and create a new blank spreadsheet.
 *    Name it something like "TCR Data".
 * 2. In the spreadsheet, open Extensions -> Apps Script.
 * 3. Delete any starter code in Code.gs and paste this entire file in.
 * 4. Click "Deploy" -> "New deployment".
 *    - Click the gear icon next to "Select type" and choose "Web app".
 *    - Description: anything, e.g. "TCR Sync API"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 5. Click "Deploy". Google may ask you to authorize — allow it
 *    (it's your own script accessing your own sheet).
 * 6. Copy the "Web app URL" you're given — it looks like:
 *      https://script.google.com/macros/s/XXXXXXXXXXXX/exec
 * 7. Paste that URL into BACKEND_URL near the top of app.js in BOTH the
 *    workshop and client app folders.
 *
 * That's it. Both apps now read/write the same data via this sheet.
 *
 * NOTE ON ACCESS: "Anyone" means anyone with this exact URL can read/write
 * your data — there's no login. The URL itself is the secret, so don't post
 * it publicly. This matches the access-code model already used for clients.
 *
 * If you ever need to update this script later, after editing code you
 * MUST create a "New deployment" again (or use "Manage deployments" ->
 * edit -> new version) for changes to take effect on the existing URL.
 */

const SHEET_NAME = "data";

/**
 * OPTIONAL: AUTO PHOTOS FROM A DRIVE FOLDER
 * -----------------------------------------
 * If you'd like item photos to come from a Google Drive folder (instead of
 * uploading them inside the app), do this one-time setup:
 *
 * 1. Create a folder in your Google Drive, e.g. "TCR Item Photos".
 * 2. Put item photos in it, naming each file by the item's CODE
 *    (e.g. "RAS.jpg", "BOX.png"). Case and extension don't matter.
 * 3. Right-click the folder -> Share -> General access ->
 *    "Anyone with the link" -> Viewer. (Required so the apps can display them.)
 * 4. Open the folder and copy its ID from the address bar. The URL looks like:
 *      https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStUv
 *    The ID is the part after "/folders/".
 * 5. Paste that ID below, between the quotes.
 * 6. Re-deploy (Manage deployments -> edit -> New version). Google will ask
 *    for Drive permission the first time — allow it (it's your own Drive).
 *
 * Leave it blank ("") to disable this feature entirely.
 */
const PHOTO_FOLDER_ID = "1K58lMURKrKJ4ImApn-BHXvkBCKWEStaf";

// Run this ONCE from the Apps Script editor to grant Drive permission.
// HOW: In the editor, pick "authorizeDrive" from the function dropdown (top
// toolbar), click Run, and approve the Drive access prompt. This is needed
// because the deployment was first authorized before the photo feature existed,
// so Google never asked for Drive access. After running it once and approving,
// re-deploy a New version and Drive photos will work.
function authorizeDrive() {
  // Touching DriveApp with a write op forces Apps Script to request the full
  // Drive scope (needed for uploading order photos).
  try {
    if (PHOTO_FOLDER_ID) {
      const folder = DriveApp.getFolderById(PHOTO_FOLDER_ID);
      // Create + trash a tiny test file to confirm WRITE access.
      const test = folder.createFile(Utilities.newBlob("ok", "text/plain", "tcr_perm_test.txt"));
      test.setTrashed(true);
      Logger.log("OK — read AND write access to folder: " + folder.getName());
    } else {
      DriveApp.getRootFolder().getName();
      Logger.log("Drive access granted. Now paste your PHOTO_FOLDER_ID and re-deploy.");
    }
  } catch (err) {
    Logger.log("Error: " + err.message);
  }
}

// Builds a map of { ITEMCODE: imageUrl } from the photo folder, matching by
// file name (without extension), upper-cased. Returns {} if not configured.
function listPhotos_() {
  if (!PHOTO_FOLDER_ID) return {};
  const map = {};
  try {
    const folder = DriveApp.getFolderById(PHOTO_FOLDER_ID);
    const files = folder.getFiles();
    while (files.hasNext()) {
      const file = files.next();
      const name = file.getName();
      const dot = name.lastIndexOf(".");
      const base = (dot > 0 ? name.substring(0, dot) : name).trim().toUpperCase();
      if (!base) continue;
      // A direct-view link that works in <img> tags.
      const id = file.getId();
      map[base] = "https://drive.google.com/uc?export=view&id=" + id;
    }
  } catch (err) {
    const msg = String(err.message || err);
    if (msg.indexOf("permission") !== -1 || msg.indexOf("DriveApp") !== -1) {
      return { error: "Drive permission not granted. In the Apps Script editor, run the 'authorizeDrive' function once and approve, then re-deploy a New version." };
    }
    return { error: msg };
  }
  return map;
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["key", "value", "updated_at"]);
  }
  return sheet;
}

function readKey_(sheet, key) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === key) return data[i][1];
  }
  return null;
}

// Google Sheets cells have a ~50,000 character limit. Stay safely under that
// so large payloads (e.g. items with photos) fail loudly instead of silently.
const MAX_CELL_CHARS = 45000;

function writeKey_(sheet, key, value) {
  if (typeof value === "string" && value.length > MAX_CELL_CHARS) {
    throw new Error("Value for '" + key + "' is " + value.length + " characters, which exceeds the " + MAX_CELL_CHARS + "-character sync limit. Try removing or shrinking item photos.");
  }
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === key) {
      sheet.getRange(i + 1, 2).setValue(value);
      sheet.getRange(i + 1, 3).setValue(new Date().toISOString());
      return;
    }
  }
  sheet.appendRow([key, value, new Date().toISOString()]);
}

function jsonOutput_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// GET ?key=cw_orders  -> { value: "<json string or null>" }
// GET ?action=listPhotos -> { photos: { CODE: url, ... } }
function doGet(e) {
  if (e.parameter.action === "listPhotos") {
    return jsonOutput_({ photos: listPhotos_() });
  }

  const key = e.parameter.key;
  if (!key) return jsonOutput_({ error: "missing key" });

  const sheet = getSheet_();
  const value = readKey_(sheet, key);
  return jsonOutput_({ value: value });
}

// POST body: { "key": "cw_orders", "value": "<json string>" }
// (sent as text/plain to avoid CORS preflight)
function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonOutput_({ error: "invalid body" });
  }

  // Image upload: saves a base64 image to the photo folder and returns a
  // link-viewable URL. Used for per-order slips and proof photos so the big
  // image data never goes into the orders Sheet cell.
  if (body.action === "uploadImage") {
    return jsonOutput_(uploadImage_(body));
  }

  const key = body.key;
  const value = body.value;
  if (!key) return jsonOutput_({ error: "missing key" });

  const sheet = getSheet_();
  try {
    writeKey_(sheet, key, value);
  } catch (err) {
    return jsonOutput_({ ok: false, error: String(err.message || err) });
  }
  return jsonOutput_({ ok: true });
}

// Saves a base64 data URL image into the photo folder (or a subfolder), makes
// it link-viewable, and returns { ok, url }. Requires Drive WRITE permission —
// run authorizeDrive() once and approve, then re-deploy.
function uploadImage_(body) {
  if (!PHOTO_FOLDER_ID) return { ok: false, error: "PHOTO_FOLDER_ID not set in Code.gs" };
  try {
    const dataUrl = String(body.dataUrl || "");
    const m = dataUrl.match(/^data:([^;]+);base64,(.*)$/);
    if (!m) return { ok: false, error: "not a base64 data URL" };
    const contentType = m[1];
    const bytes = Utilities.base64Decode(m[2]);
    const ext = contentType.indexOf("png") !== -1 ? "png" : (contentType.indexOf("webp") !== -1 ? "webp" : "jpg");
    const name = (body.name ? String(body.name).replace(/[^a-zA-Z0-9_-]/g, "") : "img_" + Date.now()) + "." + ext;
    const blob = Utilities.newBlob(bytes, contentType, name);

    const parent = DriveApp.getFolderById(PHOTO_FOLDER_ID);
    // Keep order photos tidy in an "order-photos" subfolder.
    let target = parent;
    const subs = parent.getFoldersByName("order-photos");
    target = subs.hasNext() ? subs.next() : parent.createFolder("order-photos");

    const file = target.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const id = file.getId();
    return { ok: true, url: "https://drive.google.com/uc?export=view&id=" + id, id: id };
  } catch (err) {
    const msg = String(err.message || err);
    if (msg.indexOf("permission") !== -1 || msg.indexOf("DriveApp") !== -1) {
      return { ok: false, error: "Drive WRITE permission not granted. Run authorizeDrive() once, approve, then re-deploy a New version." };
    }
    return { ok: false, error: msg };
  }
}
