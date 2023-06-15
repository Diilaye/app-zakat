'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ca8ce0070951af01e548e98c45d6dc4d",
"index.html": "7bd8ed2b3e390125614276308eb6c6fb",
"/": "7bd8ed2b3e390125614276308eb6c6fb",
"main.dart.js": "bee8e5c7848a1bf508e43165b5244222",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "c7c1cbea626d2131eb4df77df1de106c",
"icons/Icon-192.png": "c7c1cbea626d2131eb4df77df1de106c",
"icons/Icon-maskable-192.png": "c7c1cbea626d2131eb4df77df1de106c",
"icons/Icon-maskable-512.png": "c7c1cbea626d2131eb4df77df1de106c",
"icons/Icon-512.png": "c7c1cbea626d2131eb4df77df1de106c",
"manifest.json": "b0d2d12788bdbb6afef1d4525dd86768",
"assets/AssetManifest.json": "a6f9b80448a6e4d17a4a233a1df6e1d8",
"assets/NOTICES": "07e5054afb292bc86a16d42c386385a8",
"assets/FontManifest.json": "12a98c8e52df18afcd430af85287e09c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/capuchon2.png": "4ab523819cd4a8b18efa728bcb463b00",
"assets/assets/images/icon-jean-feminin.png": "9671428f13a79b1d2db7c8e7fc642ff5",
"assets/assets/images/Icon%2520feather-minus-square.png": "345bc429ada265f81aa61e682c671188",
"assets/assets/images/7.mp4": "8dbb9df1c51744190219191e7c0660fe",
"assets/assets/images/project-01.mp4": "216eadd487f7992e8bdc5b725c31ab25",
"assets/assets/images/6.mp4": "a33ef8f851a63998126a4a9db50b8351",
"assets/assets/images/chemise_vert.png": "cd4f990d599972b7778be2f9636a8ad8",
"assets/assets/images/polo1.png": "7043b6e26940ce3b0cc1d61c6c5c6f15",
"assets/assets/images/chemise4.jpg": "c8f68cf081094d8545db47fc298b08ca",
"assets/assets/images/4.mp4": "36476d81fb93f50a59344d4da159be8f",
"assets/assets/images/idn.jpg": "bda4b403df0617fe77e050cccb14e0ff",
"assets/assets/images/parfumerie.jpg": "f0b92b1dc40a1274c4db4cf6311b79d8",
"assets/assets/images/chemise5.png": "505a9f453f7fc5ce62246abac5c530b8",
"assets/assets/images/carousel04.jpg": "5fba1de05a0f817291754a2749d243c0",
"assets/assets/images/5.mp4": "2f3cd818f9851b77cd2369d9e4a4ebf9",
"assets/assets/images/home-tof.jpg": "1f003e64ab8f2a11b7079d22c057bc83",
"assets/assets/images/enssemble-pull.png": "7b3761d0030d58b66fe6d79783aca9dd",
"assets/assets/images/1.mp4": "e32a0e2b605505736528687e722bf302",
"assets/assets/images/chemise1.png": "d611c9999c61a388d07166b875998ac4",
"assets/assets/images/shoes_nike2.png": "d939ca58aa6a16a4d3d2401b4925c4b3",
"assets/assets/images/lacoste.png": "5ce86d5a864ece1cde7026d7f474d0cb",
"assets/assets/images/casquette.png": "f749a76ceb9ac0d995eb3d88beb375c6",
"assets/assets/images/carousel_01.jpg": "47ab1759122de90cc3bb840b1a8ab5e6",
"assets/assets/images/sourire.png": "742ae1fde13051007d4bdc76c2bd73d3",
"assets/assets/images/2.mp4": "646a6a2d88124b9792111a25214d70b1",
"assets/assets/images/carousdel03.jpg": "b83739fe28e67678147a3d872117be24",
"assets/assets/images/logo_carre.png": "9b0ac477522df2a7544d8b15be9c6a6d",
"assets/assets/images/chemise2.png": "441077600bdb24139dddd7f69b47843e",
"assets/assets/images/lacoste_marron.png": "8939bf0cca19560fd9690637df63708b",
"assets/assets/images/lacoste_jaune.jpg": "734b92796b7f0d8acc707137f47dea40",
"assets/assets/images/carousel02.jpg": "ccfd79ac44f201f572dad3f722a596c8",
"assets/assets/images/3.mp4": "67d4b859973c0ec419d91860cb71f578",
"assets/assets/images/shoes_nike1.png": "afd2f3e55a9f1b1b38bad53d1cc1e938",
"assets/assets/images/chemise3.jpg": "97a1095c1b2edcc54288c01696badbb5",
"assets/assets/images/missionaire1.png": "4cf34fdc4ef49bc75ca50492c443c780",
"assets/assets/images/icon-jean-masculin.png": "edaffe5cd9d6c752e3f4bab0d09152ac",
"assets/assets/images/jalaba.jpg": "0f6024dc9ac8605ede95e0dc5d46dc65",
"assets/assets/images/loupe.png": "139337588bb94ae344232db9f0157f58",
"assets/assets/images/islamique-livre-coran.jpg": "afc813965b4545afdfbb89012dfafa8d",
"assets/assets/images/zakat-logo-blanc.png": "09b00ff89348851f752a10977bf772da",
"assets/assets/images/lacoste_rouge.png": "a361ef8f1c939c0e0218ec0ef18d4821",
"assets/assets/images/radisoonlogo.png": "44198f91f74a52e7bc44fd03921c7d4c",
"assets/assets/images/logo_missionnaire.png": "e25bef0581f15ec4656e9f1dffdf91ac",
"assets/assets/images/accessoire.jpg": "274327ccfa9d3c46fb947f8855bad53c",
"assets/assets/images/carre.jpg": "b82410ca7b6dd55c98582342c0f89599",
"assets/assets/images/heritage_logo.png": "ad1970539d8af8160f82b4630fb13efe",
"assets/assets/images/img4.jpg": "9c1fd6919833c6419fd13c178e7f1fec",
"assets/assets/images/hotel4.jpg": "70c3a6b328485a3be97d93eb246e9e9d",
"assets/assets/images/avatar.jpg": "d93b8ce6d8c9a9cbd8e98cc87c8120e2",
"assets/assets/images/lacoste_blue.png": "33a870f2258f185707f03a387c295700",
"assets/assets/images/orange-money.png": "ebb2e30eea48f09fe2922fdf8adf1e57",
"assets/assets/images/logo-jongoma.png": "70151be67aac5d23984318180237be8e",
"assets/assets/images/jalabaFemme.jpg": "31bc68e1e22ae63bfba1f5509170990c",
"assets/assets/images/wave.png": "03d817befd9da709457caa3ec1d114c3",
"assets/assets/images/ca4.jpg": "fed8e1222003c0db1f3b69adfb1edf83",
"assets/assets/images/logo-zakat.png": "c7c1cbea626d2131eb4df77df1de106c",
"assets/assets/images/hotel3.jpg": "6da6ab0f2db0fdc7d11c647a6f1222fe",
"assets/assets/images/img3.jpg": "73c731ad4e5bfd6af667f81c3cd81b87",
"assets/assets/images/img2.jpg": "22fd9d9505af9334a4a3483896290a66",
"assets/assets/images/carre_shirt.png": "aff824b0bddbfa11ef503dc98691aa65",
"assets/assets/images/hotel2.jpg": "34443e261a8e3d6426276e45d9d8f715",
"assets/assets/images/ca1.jpg": "61347f1ac2e918afe826724ae855f4a9",
"assets/assets/images/cap.png": "9f33888b24a0da2763169cfd860e1ec3",
"assets/assets/images/sn.png": "779d441994b4b7d847b3880e64a0afa8",
"assets/assets/images/ca3.jpg": "356c43edd40a12a36cac622a31092e30",
"assets/assets/images/logo_6.9.png": "465a8e651c05d7ddc454d170dfaffba1",
"assets/assets/images/home-tof2.jpg": "260b821b810966787fe8ff24b87c80e8",
"assets/assets/images/Img1.jpg": "858a7e0f7d9451a09972375698e7a018",
"assets/assets/images/zakat-01.jpg": "e8cd80653f93bb280dc8155177c524f1",
"assets/assets/images/hotel1.jpg": "45e1a68393597978417822d590a533e8",
"assets/assets/images/ca2.jpg": "238df42b1cff9495acd00b3d6c57e95a",
"assets/assets/images/capuchon.png": "b8248ecac64d87f0242162acfd0a7725",
"assets/assets/images/image_plage.jpg": "3827f98911eeaa3f58b0bdce43b8cab1",
"assets/assets/images/4.jpg": "0cd0a06993fdf927524a14907e53748a",
"assets/assets/images/sac-de-courses-shop.png": "8ec3108a3f643e8bf4fe9e9dcd0fe877",
"assets/assets/images/shoes4.jpeg": "5754f1eb1a4dc3db640d7323aef94845",
"assets/assets/images/robe2.jpg": "b1d37665ebd35ee3b63de5ef0f9c22e2",
"assets/assets/images/coran.png": "7494110f0e60bb49001aac60a1e16bbc",
"assets/assets/images/coran.jpg": "0728487e95db3f7b883705a08c58128a",
"assets/assets/images/robe3.jpg": "a2652db2ef1c480b1296dde5aeb42eb9",
"assets/assets/images/wax.png": "b25895c2ec1b60f3203d154299f1b7dd",
"assets/assets/images/chapelet.jpg": "a605fe3847e49f511b25f9320afc7a35",
"assets/assets/images/icon-basket.png": "d8d446a2fd5cac03aec3693cc49102c5",
"assets/assets/images/sac-de-courses.png": "b5c653f0e43be459f5828e9c27b16f82",
"assets/assets/images/collan.jpg": "a0e1dcd3f0eece08828b05eadbfb855a",
"assets/assets/images/acc02.jpg": "6178f861953950941e6c4ac8ec5995fc",
"assets/assets/images/2.jpg": "ac0576e6be75ca33da936797661d3602",
"assets/assets/images/8.mp4": "a8c1a91a1e080417dd3b45641b728e60",
"assets/assets/images/robe4.png": "7a7bcef943cb959f5472aa41201ed204",
"assets/assets/images/robe5.png": "81569034fcc2b859f07ff9aa833de9ce",
"assets/assets/images/Icon%2520feather-plus-square.png": "893aef8341d449e37381738493a20c84",
"assets/assets/images/9.mp4": "9d1f3469075edd403eff2254c870e33a",
"assets/assets/images/3.jpg": "acbfb95f133cca1b5014684e123e0f27",
"assets/assets/images/acc03.jpg": "09c8e362bad5722ae1f0ba7517d9c301",
"assets/assets/images/zakat.png": "23efda0a724d12261cb46412431d1b7c",
"assets/assets/images/sandale.png": "2c5910659563c3af1cb245795283f0b3",
"assets/assets/images/acc01.jpg": "bec8b23549015b811b3efee4247bd019",
"assets/assets/images/1.jpg": "2b8170124988c1dc7a8255a5de0276b0",
"assets/assets/images/muslim.png": "4367171c2f2b4a8e5e5072c5a09f5aa0",
"assets/assets/images/robe6.png": "8b85c1d67654149b31e89ffacbd285ef",
"assets/assets/images/project-management.png": "43ee0caa56d0d096bdc220cd9cee9b47",
"assets/assets/images/shoes5.jpeg": "b2831cb2507b3acf72f334c8c9217c03",
"assets/assets/fonts/Lato-Italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/Lato-LightItalic.ttf": "4d80ac573c53d192dafd99fdd6aa01e9",
"assets/assets/fonts/Lato-Thin.ttf": "9a77fbaa85fa42b73e3b96399daf49c5",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/Lato-Black.ttf": "e631d2735799aa943d93d301abf423d2",
"assets/assets/fonts/Cinzel/Cinzel-Black.ttf": "978c5e3a8b70d3169531433831435f74",
"assets/assets/fonts/Cinzel/Cinzel-Bold.ttf": "10d51043381bbbd4121734b781e529e6",
"assets/assets/fonts/Cinzel/Cinzel-SemiBold.ttf": "62b93cf4ebbec70aa0c4ac5827b800bb",
"assets/assets/fonts/Cinzel/Cinzel-Regular.ttf": "39be2384867d34a46f5c9c62ed495174",
"assets/assets/fonts/Cinzel/Cinzel-ExtraBold.ttf": "ebdbea580283a7e34a5ccccccc2d0259",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/Lato-BlackItalic.ttf": "2e26a9163cb4974dcba1bea5107d4492",
"assets/assets/fonts/Satisfy/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/assets/fonts/Lato-BoldItalic.ttf": "f98d18040a766b7bc4884b8fcc154550",
"assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/assets/fonts/Lato-ThinItalic.ttf": "4ac7208bbe0e3593ce9464f013607751",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
