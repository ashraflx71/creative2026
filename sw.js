const CACHE_NAME = 'creative-2026-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت المحرك وحفظ الملفات الأساسية لتوفير البطارية والبيانات
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// استرجاع الملفات بسرعة فائقة دون استهلاك RAM إضافي
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
