self.addEventListener('install', function(e)  {
    e.waitUntil( 
      caches.open('lista').then(function(cache) {
        return cache.addAll([
            './',
            
            './RegistroSW.js',
            './apple-icon-152x152-seochecker-manifest-117.png'

        ]);
        })
      );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {

            if (response) {
                return response;
                
            }
                return fetch(event.request);
        }
    )   
);
});
