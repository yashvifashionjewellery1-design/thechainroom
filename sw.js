const CACHE_NAME = "tcr-static-v3";

const STATIC_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./logo-full.svg"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_FILES))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      clients.claim(),
      caches.keys().then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
    ])
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Never cache Apps Script API
  if (
    url.hostname.includes("script.google.com") ||
    url.hostname.includes("script.googleusercontent.com")
  ) {
    event.respondWith(
      fetch(req, {
        cache: "no-store"
      })
    );
    return;
  }

  // Always get latest JS/HTML
  if (
    req.destination === "document" ||
    url.pathname.endsWith(".html") ||
    url.pathname.endsWith(".js")
  ) {
    event.respondWith(
      fetch(req)
        .then(response => {
          const clone = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => cache.put(req, clone));

          return response;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first for images/icons/fonts
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req)
        .then(response => {
          const clone = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => cache.put(req, clone));

          return response;
        });
    })
  );
});
