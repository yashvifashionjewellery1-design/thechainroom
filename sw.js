// The Chain Room — service worker (reliability-focused)
// Versioned cache: bump SW_VERSION on every release so browsers fetch fresh
// files instead of serving stale cached assets.
const SW_VERSION = "4";
const CACHE = "tcr-cache-v" + SW_VERSION;

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./logo-full.svg",
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js",
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(ASSETS.map((url) => cache.add(url).catch(() => {})))
    )
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isApiRequest(url) {
  return url.includes("script.google.com") || url.includes("script.googleusercontent.com");
}
function isHtmlOrAppJs(url, request) {
  if (request.mode === "navigate") return true;
  return /\/app\.js(\?|$)/.test(url) || /\/index\.html(\?|$)/.test(url) || url.endsWith("/");
}

self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  if (isApiRequest(url)) {
    e.respondWith(fetch(e.request));
    return;
  }

  if (isHtmlOrAppJs(url, e.request)) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(e.request, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(e.request).then((c) => c || caches.match("./index.html")))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((cache) => cache.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => cached))
  );
});

self.addEventListener("message", (e) => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});
