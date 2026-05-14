const cacheName = 'creative-2026-v1';
const assets = [
  './',
  './index.html',
  './FontAwesome-Icons-icon.png'
];

// تثبيت الـ Service Worker وتخزين الملفات
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// جلب البيانات من الذاكرة المؤقتة (Cache)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(rec => {
      return rec || fetch(evt.request);
    })
  );
});
