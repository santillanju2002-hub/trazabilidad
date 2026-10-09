// Service worker mínimo: permite instalar la app. No guarda nada en caché,
// así siempre se abre la versión más reciente y los datos de Firebase no quedan desactualizados.
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(){});
