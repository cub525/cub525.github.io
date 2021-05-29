// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// workbox.routing.registerRoute(
//     ({ request }) => request.destination === "image",
//     new workbox.strategies.CacheFirst()
// );

// workbox.routing.registerRoute(
//     ({ url }) => url.pathname === '/index.html',
//     new workbox.strategies.NetworkFirst()
// );

// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = ['/family-songbook/', '/family-songbook/index.html', '/family-songbook/styles/index.css'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});