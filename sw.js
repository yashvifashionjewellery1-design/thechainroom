const CACHE = "tcr-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./icon.svg",
  "./logo-full.svg",
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(ASSETS.map((url) => cache.add(url).catch(() => {})))
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((cache) => cache.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => cached))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
});
