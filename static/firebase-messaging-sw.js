const staticCacheName = 'site-static-v1'
const dynamicCacheName = 'site-dynamic-v1'

const assets = [
    '/',
    '/offline',
    '/manifest.json',
    '/icons/manifest-icon-144.png',
    '/_nuxt/runtime.js',
    '/_nuxt/commons.app.js',
    '/_nuxt/vendors.app.js',
    '/_nuxt/app.js',
    '/_nuxt/pages_index.js',
    'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap',
    'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
    '/images/logo.png',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2',
    '/__webpack_hmr/client',
    '/_loading/sse',
]

//CACHE LIMIT
const limitCacheSize = (name, size) =>{
    caches.open(name).then(cache =>{
        cache.keys().then(keys =>{
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size))
            }
        })
    })
}//LIMIT CACHE SIZE

//INSTALL EVENT
self.addEventListener('install', event => {
    console.log('SW has been installed')
    event.waitUntil(
        caches.open(staticCacheName).then(cache =>{
            console.log('caching landing page assets')
            cache.addAll(assets)
        })//CACHE ASSETS
    )//EXTEND INSTALL EVENT UNTIL ALL CACHING IN COMPLETE
})


//ACTIVATE EVENT
self.addEventListener('activate', event => {
    console.log('SW has been activated')
    event.waitUntil(
        caches.keys().then(keys =>{
            console.log(keys) 
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            )// LOOP AND DELETE OLD CACHES NOT MATCHING CURRENT CACHE NAME
        })//GET CACHES
    )//EXTEND ACTIVATE EVENT UNTIL ALL OLD CACHES ARE DELETED
})


//FETCH EVENT
self.addEventListener("fetch", event => {
    console.log('Fetch Event : ', event)
    if(event.request.url.indexOf('firestore.googleapis.com') === -1){
        event.respondWith(
            caches.match(event.request).then(cacheRes =>{
                return cacheRes || fetch(event.request).then(fetchRes =>{
                    return caches.open(dynamicCacheName).then(cache =>{
                        cache.put(event.request.url, fetchRes.clone())
                        limitCacheSize(dynamicCacheName, 40)
                        return fetchRes
                    })
                })
            })//CACHE
            .catch( () => {
                if(event.request.url.index('.html') > -1){
                    return caches.match('/offline') 
                }
            })//CATCH
        )//EVENT RESPONSE
    }//IF
    
})//FETCH EVENT