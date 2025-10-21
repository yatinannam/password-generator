// Simple service worker to cache app shell for offline use.
const CACHE_NAME = 'pwd-toolbox-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  // If you add icons, include them here (e.g., '/icon-192.png')
];

self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => {
      if (k !== CACHE_NAME) return caches.delete(k);
    })))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (ev) => {
  // network-first for APIs; cache-first for app shell
  const req = ev.request;
  if (req.method !== 'GET') return;
  ev.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(resp => {
        // cache same-origin GET responses
        if (resp && resp.type === 'basic') {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, respClone));
        }
        return resp;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
