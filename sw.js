const CACHE = "tcr-cache-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./logo-full.svg"
];

// Install new service worker immediately
self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(
        ASSETS.map((url) =>
          cache.add(url).catch(() => {})
        )
      )
    )
  );
});

// Activate immediately and remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      clients.claim(),
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE)
            .map((key) => caches.delete(key))
        )
      )
    ])
  );
});

// Network-first for JS/HTML/API
// Cache-first for images/icons
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Never cache Apps Script API calls
  if (url.href.includes("script.google.com")) {
    event.respondWith(
      fetch(req, { cache: "no-store" })
    );
    return;
  }

  // Always fetch latest HTML and JS
  if (
    req.destination === "document" ||
    url.pathname.endsWith(".html") ||
    url.pathname.endsWith(".js")
  ) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) =>
            cache.put(req, copy)
          );
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req)
        .then((res) => {
          const copy = res.clone();

          caches.open(CACHE).then((cache) =>
            cache.put(req, copy)
          );

          return res;
        })
        .catch(() => cached);
    })
  );
});
