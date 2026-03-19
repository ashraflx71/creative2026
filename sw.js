const CACHE_NAME = 'creative2026-v1';
const urlsToCache = [
  '/creative2026/',
  '/creative2026/index.html',
  '/creative2026/manifest.json',
  '/creative2026/icon-192.png',
  '/creative2026/icon-512.png'
];

// تثبيت الـ Service Worker وتخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// استراتيجية التنفيذ: من الكاش أولاً، ثم من الشبكة
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إذا وجد الملف في الكاش، أعطه من الكاش
        if (response) {
          return response;
        }
        // إذا لم يجده، اذهب إلى الشبكة
        return fetch(event.request);
      }
    )
  );
});
