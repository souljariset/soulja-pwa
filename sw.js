/* ==========================================
   SOULJA PWA
   Production Service Worker
========================================== */

const VERSION = "1.1.2";
const CACHE_NAME = `soulja-${VERSION}`;

/* ==========================================
   FILES
========================================== */

const PRECACHE = [

    "/",

    "/index.html",
    "/input.html",
    "/menu.html",
    "/recommendation.html",
    "/offline.html",

    "/manifest.json",

    "/css/global.css",
    "/css/components.css",
    "/css/animation.css",

    "/css/pages/landing.css",
    "/css/pages/input.css",
    "/css/pages/menu.css",
    "/css/pages/recommendation.css",

    "/js/database.js",
    "/js/storage.js",
    "/js/components.js",
    "/js/recommendationEngine.js",

    "/js/pages/landing.js",
    "/js/pages/input.js",
    "/js/pages/menu.js",
    "/js/pages/recommendation.js",

    "/assets/logo2.png",

    "/assets/icons/icon-192.png",
    "/assets/icons/icon-512.png"

];


/* ==========================================
   INSTALL
========================================== */

self.addEventListener("install", event => {

    event.waitUntil(

        (async()=>{

            const cache = await caches.open(CACHE_NAME);

            for(const url of PRECACHE){

                try{

                    const response = await fetch(url,{cache:"reload"});

                    await cache.put(url,response);

                    console.log("CACHE :",url);

                }

                catch(e){

                    console.warn("FAILED :",url);

                }

            }

        })()

    );

    self.skipWaiting();

});


/* ==========================================
   ACTIVATE
========================================== */

self.addEventListener("activate",event=>{

    event.waitUntil(

        (async()=>{

            const keys = await caches.keys();

            await Promise.all(

                keys.map(key=>{

                    if(key!==CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            );

            await self.clients.claim();

        })()

    );

});


/* ==========================================
   FETCH
========================================== */

self.addEventListener("fetch",event=>{

    if(event.request.method!=="GET") return;

    const url = new URL(event.request.url);

    /* ------------------------------
       HTML Navigation
    ------------------------------ */

    if(event.request.mode==="navigate"){

        event.respondWith(

            (async()=>{

                try{

                    const network = await fetch(event.request);

                    const cache = await caches.open(CACHE_NAME);

                    cache.put(event.request, network.clone());

                    return network;

                }

                catch(e){

                    const cache = await caches.open(CACHE_NAME);

                    return (

                        await cache.match(event.request)

                        ||

                        await cache.match("/offline.html")

                        ||

                        await cache.match("/index.html")

                    );

                }

            })()

        );

        return;

    }

    /* ------------------------------
       Static Asset
    ------------------------------ */

    event.respondWith(

        (async()=>{

            const cache = await caches.open(CACHE_NAME);

            const cached = await cache.match(event.request);

            if(cached){

                return cached;

            }

            try{

                const network = await fetch(event.request);

                cache.put(event.request,network.clone());

                return network;

            }

            catch(e){

                return cached;

            }

        })()

    );

});