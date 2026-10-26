/* Service worker minimal: face site-ul instalabil. Nu pune date în cache (clasamentul se citește mereu live). */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
