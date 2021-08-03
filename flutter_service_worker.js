'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4fc0f68ecce0e65fdad756f3df7b6709",
"assets/assets/images/1.0x/BACKGROUND.png": "fb8b591cb1271e98425703c2d05537e0",
"assets/assets/images/1.0x/classic.png": "87aef5b04c3ad5f534cf367ff8e5047a",
"assets/assets/images/1.0x/clean.png": "dcf1ace373e38857eab154ff8d187037",
"assets/assets/images/1.0x/confirm.png": "dc862a0e1b0bf0d5e73cf3e53cf4e4c7",
"assets/assets/images/1.0x/congratulations.png": "47b4a8564e9212fc8e74e353848af93b",
"assets/assets/images/1.0x/down-arrow.png": "fab1680958e71fb4688ae90c3c812763",
"assets/assets/images/1.0x/egypt.png": "ea5d2db4aabc0a2d257a473e365c3ef2",
"assets/assets/images/1.0x/etisalat.png": "a833f5f5d8223b93c49479b9b28d87d8",
"assets/assets/images/1.0x/facebookGrey.png": "6e75d4b4aace57456b4dda6943b5f1e3",
"assets/assets/images/1.0x/gift.png": "6ec67e7f5d971157ea79527a090711d2",
"assets/assets/images/1.0x/googleGrey.png": "7e5247acad1fe02a6d5f576c33c4d760",
"assets/assets/images/1.0x/INSTAGRAM.png": "8e0e5f6a5ad3ad530185a9d84b569274",
"assets/assets/images/1.0x/leave_message.png": "1b758dca6423e35e0cf1ac00160c2fba",
"assets/assets/images/1.0x/list-text.png": "9aa450582d65219049ec21a54c7b8681",
"assets/assets/images/1.0x/logo.png": "475f1727463b8809a43ae2f619b86ae0",
"assets/assets/images/1.0x/onboard1.png": "bf387639d15c93deefe1f017dc6d7bef",
"assets/assets/images/1.0x/onboard2.png": "06756e1f4c568688fd32ba0dc4a152c3",
"assets/assets/images/1.0x/onboard3.png": "b79dd8ea31bc490227ac408d565779b3",
"assets/assets/images/1.0x/orange.png": "6cb7c2e3585ff81c76906fc19f9b7fe8",
"assets/assets/images/1.0x/permise.png": "d7819580a66ddf920cafb003deaf632b",
"assets/assets/images/1.0x/photo-FB.png": "89de589c2adcb24b689748109fd08ccf",
"assets/assets/images/1.0x/shaded.png": "6e9ff3fde19a3d3a5b8195628e2b8abd",
"assets/assets/images/1.0x/twitter.png": "642122f50524118d501d5dfb2d5b1dd8",
"assets/assets/images/1.0x/up_photo.png": "38179bbf8ff8807274a1b4b7dfd045ad",
"assets/assets/images/1.0x/us.png": "dd79e8b3c5f303cf5f158b43e1fc313f",
"assets/assets/images/1.0x/vodafone.png": "3eab95aa733d3461fb7a52a1a831cc78",
"assets/assets/images/1.5x/BACKGROUND.png": "cda069f0ca35ffb9ffebd96e40ea0d91",
"assets/assets/images/1.5x/classic.png": "b9394f4eceb4619915a475dd175e4f75",
"assets/assets/images/1.5x/clean.png": "b5e81b421773a9d4eacab80775e19446",
"assets/assets/images/1.5x/confirm.png": "3514ddc01b91f4fd37c87f35211aa32f",
"assets/assets/images/1.5x/congratulations.png": "76df9d6a8748e4db98e65ff700f675f6",
"assets/assets/images/1.5x/down-arrow.png": "b34f49ec2bd92e10ce9c22363a94377c",
"assets/assets/images/1.5x/egypt.png": "6533cff69dfe8f09c480123a3d98b663",
"assets/assets/images/1.5x/etisalat.png": "93f38537681cfb8dab9a17d5cd9c11fe",
"assets/assets/images/1.5x/facebookGrey.png": "893d1928255d49f323f14520342e41e4",
"assets/assets/images/1.5x/gift.png": "a0abf682af08417517edf082ed41e359",
"assets/assets/images/1.5x/googleGrey.png": "5e6de35d95435df5a7272f4e7d4eab52",
"assets/assets/images/1.5x/INSTAGRAM.png": "eff61d4f5108d456cee1325e803f293f",
"assets/assets/images/1.5x/leave_message.png": "c73ea3b2e27881e6afbc163caf3abcdc",
"assets/assets/images/1.5x/list-text.png": "51a5555051c3fe2ef9bfc1971d38dac4",
"assets/assets/images/1.5x/logo.png": "3695804669d40bf976dd6427311e149a",
"assets/assets/images/1.5x/onboard1.png": "733355430cb4e7d39a567ba0d85a29a5",
"assets/assets/images/1.5x/onboard2.png": "6491a079ff415736b8ae2c8579a47ee6",
"assets/assets/images/1.5x/onboard3.png": "af6f5c54c04f57e7e83d7f595fa360c2",
"assets/assets/images/1.5x/orange.png": "54cf1643c2598a6cb56f949cf85146b9",
"assets/assets/images/1.5x/permise.png": "68d4902a004f7a12f4df6823597764f8",
"assets/assets/images/1.5x/photo-FB.png": "f1d954ef24372dc2a486b15f77aa431e",
"assets/assets/images/1.5x/shaded.png": "161df649397d62d266cd9cd9e9828fb6",
"assets/assets/images/1.5x/twitter.png": "c67f66dc426b17f8448d0c32011469c7",
"assets/assets/images/1.5x/up_photo.png": "b91d06884844e35e9ac654364992c0c1",
"assets/assets/images/1.5x/us.png": "0d7777c0090d60f1733c721876f759c9",
"assets/assets/images/1.5x/vodafone.png": "bc725dfafd819295e9ecbfb5e50385b1",
"assets/assets/images/2.0x/BACKGROUND.png": "c35ca69369fde67c7a159a946d2c04ae",
"assets/assets/images/2.0x/classic.png": "963ba4e910a439a0150772803a538fac",
"assets/assets/images/2.0x/clean.png": "15c8086047d583e3cf40322dadc6fdfd",
"assets/assets/images/2.0x/confirm.png": "b3aac05a39d3233dec30da79fb7ed755",
"assets/assets/images/2.0x/congratulations.png": "8a7c460078ebd67a60cdf31aa0ec0132",
"assets/assets/images/2.0x/down-arrow.png": "6a6efd9b470cff8ff09558422b55895a",
"assets/assets/images/2.0x/egypt.png": "de72add265944d0e3c63e950f5beab3b",
"assets/assets/images/2.0x/etisalat.png": "69b4c0a80969237ab383ea22f9fc81dc",
"assets/assets/images/2.0x/facebookGrey.png": "71a4c7f1d6d43ef9446f5c446454bf47",
"assets/assets/images/2.0x/gift.png": "2b0bd39ac641506136498d5aee824031",
"assets/assets/images/2.0x/googleGrey.png": "56caa62681b5d69ada9ab4d97e12d1a2",
"assets/assets/images/2.0x/INSTAGRAM.png": "b0d49e5f530a9ad279117cc146aa8e7c",
"assets/assets/images/2.0x/leave_message.png": "a9693a88956d262cbf6b3cae5f67167d",
"assets/assets/images/2.0x/list-text.png": "8d1cc2b8f9609fa222c12dbc6d98318f",
"assets/assets/images/2.0x/logo.png": "82f66a5dafb0a36dace4861f7a609dcc",
"assets/assets/images/2.0x/onboard1.png": "72f8d620fe5dd1e49e9a9eabcacd552e",
"assets/assets/images/2.0x/onboard2.png": "a841bfed73da5eb87c67cb866150bb6b",
"assets/assets/images/2.0x/onboard3.png": "f81b71af1b2c346c4a8522631fdec222",
"assets/assets/images/2.0x/orange.png": "9c0b8ced8553bebd52cf069cf66feb2b",
"assets/assets/images/2.0x/permise.png": "38b3ffa0176dd2b5da34185cd38e0826",
"assets/assets/images/2.0x/photo-FB.png": "9e53d38b223895681859a657a356464a",
"assets/assets/images/2.0x/shaded.png": "9f4d45898a050bb9f4fb9d7da26c68f5",
"assets/assets/images/2.0x/twitter.png": "5ea6367b4e623dfaa031c79a6abc39af",
"assets/assets/images/2.0x/up_photo.png": "02ea9a527ccfbe2b7fded4bb0dcdc13d",
"assets/assets/images/2.0x/us.png": "dfac8c14a58a8642e9d735c48fbfbf88",
"assets/assets/images/2.0x/vodafone.png": "563020a27b98cb79ced7ee01cc721b25",
"assets/assets/images/3.0x/BACKGROUND.png": "b57b73c515bffb19edfe81432d91f388",
"assets/assets/images/3.0x/classic.png": "948b2920fbe19b52a8ed76cbe214c5b4",
"assets/assets/images/3.0x/clean.png": "e8e2b0ad9a84330ce3a9cb0993f8aede",
"assets/assets/images/3.0x/confirm.png": "ad433d8c93bf2aaedb32e943637a4f36",
"assets/assets/images/3.0x/congratulations.png": "ef6a5b7b070ed76ca3b097b43b22e331",
"assets/assets/images/3.0x/down-arrow.png": "2e841cfc320bc54bf073ffe10f05fc90",
"assets/assets/images/3.0x/egypt.png": "7618e2739690b7de48b76babe65d5438",
"assets/assets/images/3.0x/etisalat.png": "f0278b38f0b2f7cc9d3763e69900f8a2",
"assets/assets/images/3.0x/facebookGrey.png": "b3c5eae0e881d69c07111b028b2fc938",
"assets/assets/images/3.0x/gift.png": "ea8417e3483be9f32bc71c6ee9ebc9b6",
"assets/assets/images/3.0x/googleGrey.png": "a521549bdd3b2401a7622bb2646c8512",
"assets/assets/images/3.0x/INSTAGRAM.png": "00f8895e415c5593e049ff4c5b4ee5dd",
"assets/assets/images/3.0x/leave_message.png": "700942fb97f66a91a7ba0bab6c46dea3",
"assets/assets/images/3.0x/list-text.png": "d5703153f7d52b82fb0d2df797f29a3b",
"assets/assets/images/3.0x/logo.png": "0c3740e44f3545a81e7c3a8952a2c546",
"assets/assets/images/3.0x/onboard1.png": "8008b72179f711e383c0ebd3a92fbf26",
"assets/assets/images/3.0x/onboard2.png": "c90bd7ea265c01124738a29393a2d799",
"assets/assets/images/3.0x/onboard3.png": "65295a95b086b00444a75caa4e39ac1e",
"assets/assets/images/3.0x/orange.png": "5dac86af3d4dda708cfa3e28436d72e7",
"assets/assets/images/3.0x/permise.png": "e34cdb53a8725ed2d5e4d7011bfb8014",
"assets/assets/images/3.0x/photo-FB.png": "4db2267a711f2342e072c9fc573f3ca7",
"assets/assets/images/3.0x/shaded.png": "46f9161f1fc40a4bf4aefc82e6381856",
"assets/assets/images/3.0x/twitter.png": "8209d082fb77b1672eb96bacb6fcd1c5",
"assets/assets/images/3.0x/up_photo.png": "982b45ede5cbf1ee9c78f3079eb7ddec",
"assets/assets/images/3.0x/us.png": "c76206ed8f068bb8e168a73b9c50c59d",
"assets/assets/images/3.0x/vodafone.png": "9ec526aa69a82667f995fa079ac78a8f",
"assets/assets/images/4.0x/BACKGROUND.png": "f0c22daafe9ba645ac14859c915e3a97",
"assets/assets/images/4.0x/classic.png": "1354ef1769b55e3f28bbbf8aa9e02fb5",
"assets/assets/images/4.0x/clean.png": "12f701934eee7f9099558592be8c3599",
"assets/assets/images/4.0x/confirm.png": "87cd7d36ba941b628bc5693b339dd17f",
"assets/assets/images/4.0x/congratulations.png": "f22794e5f1c61bb9431ba84f6e700747",
"assets/assets/images/4.0x/down-arrow.png": "e728d094f094bd9a2860b4109d1674c6",
"assets/assets/images/4.0x/egypt.png": "da4bdaf28b686b0675119096620804b6",
"assets/assets/images/4.0x/etisalat.png": "bb00f02aaba6cd3c005dba59e1f0315d",
"assets/assets/images/4.0x/facebookGrey.png": "795e917cb6059aa57b0694ca3554ba50",
"assets/assets/images/4.0x/gift.png": "e7eeea85906cc42a1bb23019230b93e5",
"assets/assets/images/4.0x/googleGrey.png": "2f12a4ee34b9632944d7536f38c650cc",
"assets/assets/images/4.0x/INSTAGRAM.png": "b2ef983c97e458b9cc1579103e21c501",
"assets/assets/images/4.0x/leave_message.png": "cc5b59182b26cef6a9401fc5756458e0",
"assets/assets/images/4.0x/list-text.png": "25c00ce92728d3147a68e2755f4314f6",
"assets/assets/images/4.0x/logo.png": "033a9967b7c4783e6a932598606507aa",
"assets/assets/images/4.0x/onboard1.png": "700506eb03c26923ae51f5f7bfbb5071",
"assets/assets/images/4.0x/onboard2.png": "a03d81cf5c0a5f308bcca7c37d852341",
"assets/assets/images/4.0x/onboard3.png": "78cc990d64d4bd47164dbcb4e9a730ca",
"assets/assets/images/4.0x/orange.png": "757953a6871448da52182f50c31db4d3",
"assets/assets/images/4.0x/permise.png": "1c86af50feb08ff179f5fa18622a7a6c",
"assets/assets/images/4.0x/photo-FB.png": "94031875bf1b61f2d3495b9ab3b99faa",
"assets/assets/images/4.0x/shaded.png": "9f97b2aee3c2a94062636a63f194b9b7",
"assets/assets/images/4.0x/twitter.png": "be546501e6a2e2ea9fe6ae51a5e46e53",
"assets/assets/images/4.0x/up_photo.png": "d975a311deb61c6c940c78befe3e0d1b",
"assets/assets/images/4.0x/us.png": "d4462d96d3f5ff09b2f23f6ec0fbb965",
"assets/assets/images/4.0x/vodafone.png": "32775824e41b4ace62117638381dc32f",
"assets/assets/images/social_post.png": "cb3405f994942535d3a4b851878ca932",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e65d3cecee524296973b8bce4a87bce7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "316d063f0b0c9355f8e75b24de1d2553",
"/": "316d063f0b0c9355f8e75b24de1d2553",
"main.dart.js": "aea33298cfdb95bd1f8fcbaa564be620",
"manifest.json": "ea92df44ab6ad3d5e42ace2b822d3b5c",
"version.json": "d38a3527ee3f654d4ed7b6ece9d328b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
