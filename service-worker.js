// Choose a cache name
const cacheName = 'Maxa-cache-v1';
// List the files to precache
const precacheResources = [
  '/',
  '/index.html', 
  '/offline.html',
  '/css/style.css', 
  '/js/main.js', 
  '/js/app/editor.js', 
  '/js/lib/actions.js',
  './scenes/sceneManager.js',
  '/WebXR-Modules/babylon.js',
  '/WebXR-Modules/babylonjs.materials.min.js',
  '/jquery-ui.min.js',
  '/icons/icon16.png',
  '/textures/3d-model.png',
  '/textures/3d-model-02.png',
  '/style.css',
  '/scenes/index.css',
  '/WebXR-Modules/css2.css',
  //furball assets
  '/scenes/furballScene.html',
  '/scenes/furballScene.js',
   //furpink assets
   '/scenes/furpinkScene.html',
   '/scenes/furpinkScene.js',
  //specularBalls assets
  '/textures/environment.dds',
  '/textures/ennisSpecularHDR.dds',
  '/textures/reflectivity.png',
  '/textures/albedo.png',
  //Spiral Spring assets
  '/scenes/specularBallsScene.html',
  '/scenes/specularBallsScene.js',
  //Digital Rain assets
  '/scenes/digitalRainScene.html',
  '/scenes/digitalRainScene.js',
  '/WebXR-Modules/babylon.digitalRainPostProcess.js',
  //Twin Stone assets
  '/scenes/twinStoneScene.html',
  '/scenes/twinStoneScene.js',
  '/textures/Floor.png',
  '/textures/floor_bump.png',
  '/textures/candleopacity.png',
  '/textures/earth.jpg',
  //sketchFourier assets
  '/scenes/sketchFourier.html',
  '/scenes/sketchFourier.js',
   //gaming assets
   '/scenes/tickTac.html',
   '/scenes/tickTac.js',
   '/scenes/tickTac.css',
   //buttons
   '/textures/embed_black.png',
   '/textures/embed_white.png',
   '/textures/embed_g.png',
   '/textures/share-white.png',
   '/textures/share-black.png',
   '/textures/share-g.png',
   '/textures/fun-white.png',
   '/textures/fun-black.png',
   '/textures/fun-g.png',
   '/textures/credit-white.png',
   '/textures/credit-black.png',
   '/textures/credit-g.png',
   '/textures/pin-white.png',
   '/textures/pin-white2.png',
   '/textures/pin-red.png',
   '/textures/pin-red2.png',
   '/textures/hideUI-black.png',
    '/textures/hideUI-white.png',
    '/textures/hideUI-g.png',
    '/textures/refresh.png',
   '/textures/refresh02.png',
   '/textures/Maxa-logo-white.png'

];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});