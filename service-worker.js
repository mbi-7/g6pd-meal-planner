
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('g6pd-meal-cache').then(function(cache) {
      return cache.addAll([
        './G6PD_Safe_Web_Plan_Dark_Mode_With_Tracker.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
