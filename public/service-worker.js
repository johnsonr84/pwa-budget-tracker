const filesToCache = [
	'/',
	'/index.html',
	'/style.css',
	'/db.js',
	'/index.js',
	'/manifest.webmanifest',
	'/icons/icon-192x192.png',
	'/icons/icon-512x512.png'
];

const STATIC_CACHE = "static-cache-v2";
const DATA_CACHE = "data-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

// Install lifecycle method
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});