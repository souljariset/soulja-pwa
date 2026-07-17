const CACHE_NAME = "soulja-v1.0.6";

const APP_FILES = [

    "/",

    "/index.html",
    "/input.html",
    "/recommendation.html",
    "/menu.html",

    "/manifest.json",

    "/css/global.css",
    "/css/components.css",
    "/css/animation.css",

    "/css/pages/landing.css",
    "/css/pages/input.css",
    "/css/pages/recommendation.css",
    "/css/pages/menu.css",

    "/js/database.js",
    "/js/storage.js",
    "/js/components.js",
    "/js/recommendationEngine.js",

    "/js/pages/landing.js",
    "/js/pages/input.js",
    "/js/pages/recommendation.js",
    "/js/pages/menu.js",

    "/assets/logo2.png",

    "/assets/icons/icon-192.png",
    "/assets/icons/icon-512.png"

];

self.addEventListener("install", event=>{

    console.log("===== INSTALL =====");

    event.waitUntil(

        (async()=>{

            const cache=await caches.open(CACHE_NAME);

            for(const file of APP_FILES){

                try{

                    await cache.add(file);

                    console.log("✅",file);

                }

                catch(e){

                    console.error("❌",file);

                }

            }

        })()

    );

    self.skipWaiting();

});

self.addEventListener("activate",event=>{

    console.log("===== ACTIVATE =====");

    event.waitUntil(

        caches.keys()

        .then(keys=>Promise.all(

            keys.map(key=>{

                if(key!==CACHE_NAME){

                    return caches.delete(key);

                }

            })

        ))

    );

    self.clients.claim();

});

self.addEventListener("fetch", event => {

    if (event.request.mode === "navigate") {

        event.respondWith(

            fetch(event.request)

                .catch(() => caches.match("/index.html"))

        );

        return;
    }

    event.respondWith(

        caches.match(event.request)

            .then(response => response || fetch(event.request))

    );

});