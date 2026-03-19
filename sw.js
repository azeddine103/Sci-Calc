const CACHE_NAME = 'sci-calc';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Installieren und Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Dateien aus dem Cache servieren (macht die App offline-fähig)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
