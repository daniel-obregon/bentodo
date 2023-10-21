const staticCacheName = "mi-cache";

const assets = [
    './offline.html',
    './css/app.css',
    './assets/svg/bear404.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open (staticCacheName).then(cache => {
            cache.addAll(assets)
        })
    );
});

self.addEventListener('fetch', event => {
    
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            if(cacheRes){
                return cacheRes
            }else if(!navigator.onLine){
                return caches.match('./offline.html');
            }else{
                return fetch(event.request);
            }
        })
    )
});
