const CACHE_NAME = 'creative2026-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/services.html',
  '/manifest.json',
  '/FontAwesome-Icons-icon.png',
  '/folder-blue-pictures-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
