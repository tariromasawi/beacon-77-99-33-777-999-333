self.addEventListener("install", e => {
  e.waitUntil(caches.open("beacon-v1").then(c => c.addAll(["./","./index.html","./data/pulse.json","./README.md"])));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
