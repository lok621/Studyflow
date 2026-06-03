const CACHE = 'loknotes-v1';
const FILES = ['/Studyflow/', '/Studyflow/index.html', '/Studyflow/manifest.json', '/Studyflow/icon-192.png', '/Studyflow/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
