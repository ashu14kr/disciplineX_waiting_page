'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "115503eb27a13440e7c6274985cbd0c6",
"version.json": "245fefb4a0cc0ef0eee8d25320227a84",
"index.html": "d22c681e0d7733977eab886adac9f6da",
"/": "d22c681e0d7733977eab886adac9f6da",
"CNAME": "da49d156d44a5c3dfcf067e650d807f9",
"main.dart.js": "1d683f5203063b87cceaaea81e6a2dad",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cc46981f73a1117282b46aabf50fba8d",
".git/config": "065a9d4ff96ceae10a942189d9dc2289",
".git/objects/59/2ee0133cb38cf792a06ad0009db82d7ab787df": "7a5375aeb0fd0e91795572e003748044",
".git/objects/59/7f6cd497842956f04ff6592350dee9841a23c4": "d0d47e40129d34fc2174504c1405aa37",
".git/objects/57/893dd016fd6b353a08898f3a4943fa2f46a604": "20b80f2d1fcee470cf849d1646ac8efc",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "b1ba15563aa055cd2249df3893ce32b4",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/94/2d52335b0a7af1224ec6218af23c9ce89d5c57": "bfe0530efd177936cf24a353f701bb3f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/b2/5eb6a8eaf6f20a7c99da9c1a13bdacd288c214": "3ff7f22804e128773039f7955be53d05",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "2d21dcb62774f28dd83eb4b98859b3f3",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d1/4000e70b53bff27fd999fa218e5337045e1de0": "d542ac206965b315fb5ff00683b4e2e0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d6/ea8e034e7cdba62d9a25343f8879d30f7782d1": "c86cc9996c66ed364a66d41a1c4ea28b",
".git/objects/d8/c937c3b168d1ca947d06c8030f284485539505": "a5b4fa86f388a1247b2f64556c081270",
".git/objects/e5/3784e9d830b75bae5b4f17f0cc1fe4c7e387f9": "9228ee36453be9aa289375ae5cd16e3a",
".git/objects/e2/11756873bd775c87fa13391433d99c7cf38b6f": "53234b257bd64974e76b7484142c348e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/fd/9258df96525b714205ae608fdfffa88f6d1fb0": "e038aa46276435816fb6d7b5ce1056bf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/cf/948777d4c4cb6c96e8ec99343eadc98d082c63": "0c7ebe0c3503100c36ae39ec5dfdc0a3",
".git/objects/c6/c26a5145511527d308f62831f1775fc93e94b0": "5a3a30b1d1457677558db6217e06b577",
".git/objects/c6/ddc92397c41742812397aae756739854e5372d": "8b24e37300aea0cc6b30bb4f5125d469",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/20/90c37e50af6d0c701f4dc3cc7aec7b8e4dd39b": "734f7e66e4870e5ed014ffdebda11213",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/4b/09c19684e8a0dcb6e4bc180f8d4855d76f255b": "993047ac4e004a14c7dfc8dad32dfb74",
".git/objects/42/bbcb1e862bafa31dc6202e012e5fde9512e33b": "05b89b92e71e232ddcd28c2f285fee75",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/28/7b91747caf728b53b0f913ee3cf6ca995a4385": "5a11dc0f98e15ae0a3b6ac5e822ac786",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/84d6ee31dc77538a5d42a75f938dd6a618eb9a": "0acd3dc4f7d545f9f8d571bcf355876d",
".git/objects/81/4c911e1a3d68743e83c3c7dd12a31a9defb36e": "85bc4476451fbb287caa182df8aa077c",
".git/objects/86/d607387df9fa7936fc1bd689b36b6c07b6c9fe": "7ea1542f6a4aceff7b8e8edbae804708",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/dc18feb56be0d7b69b6f88c6d6356b0782532a": "95c3b3a0679b1500167dd1f524ad8484",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "7f7b221c21a4daf44b542e74c57fd2e8",
".git/objects/98/c540fd8b39557f6172a2322aeb01c67c0cf952": "6ca881e95c5256fefc27ee37715ab85f",
".git/objects/98/5501bbaa08a82891535d2566e10691280bb072": "6c6cc8afdb2546509e1a0401004d8261",
".git/objects/53/082e1f125dbe039eb4f7ca5fb17c561f9b2e63": "db6edd6f623f6c723c9117e56b2386d3",
".git/objects/01/5c4eae24d7c9210e5beea93ff812f78a7346e8": "dd14b3c397316e561330f92a0f15a710",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/2ee5fa9b0c878eaa3c74e19205b5bd0f1c864e": "8c83c1d40bbbd867ae6f7ca5bafb926d",
".git/objects/b9/99747915d0c2eb58eb5974a630d17a6c31a489": "0579147cbbbeb4a9252d84484b4f5b23",
".git/objects/f9/a04e2edd2d0da454de136392ac52865d411bbd": "9cac0faf7ca6316ef70d4b69691b087e",
".git/objects/f9/3d93870766884422ce58e267eccf10eeeb2038": "df1cc9a5c712a81c74ef0ac557274897",
".git/objects/f7/8ee545e8cfaf03508c5e5a2c688f708c0344b2": "d17c138060eb16351079fab0eda31325",
".git/objects/e8/e6db26630a125074371745e002e13fac6e616e": "d87b3b420be47b171ab28ab6b8775d4e",
".git/objects/c5/dfde257890d08eba877ea578e5085adc505762": "caee5cb58a3f258c1b2683279ebe77b9",
".git/objects/f6/d26948641123a5278fffbba8afd8d108065983": "70fa96cb8a4d4a4b05a2d3e395519d30",
".git/objects/f6/1202577bc116dfa8d7f4732094e7c667c095f7": "3f3e8c7b662f9a5f3d849db8ab9e75c5",
".git/objects/f1/a0a3b2c8d5484b9ea0480f8a3dd0c5c30011e3": "39b0d97f0d41d0e0339ca3e40f40e0ab",
".git/objects/cb/dc93e8939171d14908856f81d95eaf7cd9cf92": "665c53634f939f84354f6bf7929a919b",
".git/objects/cb/cb8ea319fca3222dfc8d60f48187bc4428e305": "c1894025957590cb0f0e24c9fbb49289",
".git/objects/ce/48bc921e79c547c26999f78c7e0aff800ff1be": "2693724e546c7af605f0d76673e8d10d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4f/62dbfe7d984fde7c6e90afebf59a18046986ce": "d25f19d7a7d129eb86053beb3c64f244",
".git/objects/4f/c1de1c106af3322779e5623932bd6097af911e": "8cc67e7a9fade10bfdfe25422616d7cd",
".git/objects/12/2cc3a348f8b955567206e46f15efa08413692a": "229db35765f29750df98e4802705e29e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/76/695e0a8d55fe6fc1f88cd3ae489687741618b8": "6f9f689dfe52904d390d94ade612041c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/49/b84e635a8d4de909fbd6a34026e113bdcca0e2": "c5e091080c7c18b9cb86ba542e3ebe5a",
".git/objects/49/b105baa8407d5c3ad2cf096b8ea2c392c3fe80": "0ec7b1e26685d73246f6f42eb6968e08",
".git/objects/40/533b5dcd66f94d03649df3edba726003c6b10a": "8bcb026e1bf3a475ad3e244d6baf3407",
".git/objects/8b/292e5184bd7fea1830b27fad53a2992224379c": "61b11157dae4a6db530620404ee261f2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c1f370cfbd85ee11c4b3617d3f26b2d",
".git/logs/refs/heads/main": "d0316a7b1b8f2482aa57ca1cbed492fb",
".git/logs/refs/remotes/origin/main": "636ab1d34f33c7203e9cf9cd27ecf988",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e651b9c72d7873f4e4f4c19ab7850417",
".git/refs/remotes/origin/main": "e651b9c72d7873f4e4f4c19ab7850417",
".git/index": "29fd5d1e14a1d1e226cb0dd2361b5a54",
".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
"assets/AssetManifest.json": "1b4253ddd574d8c1df7c6a5aeb727b69",
"assets/NOTICES": "83ea9adf7ffa6d4c9cd89ccd9c10c9b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bc43c579d72f862d52ea9716e95a1587",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "82a6bad8eee9adae2cc13dbe546e7f03",
"assets/fonts/MaterialIcons-Regular.otf": "cecdfefc60b46dacf4a1159aa3319470",
"assets/assets/images/mail.png": "7fabf5078033d12a010c1c836ed1afb6",
"assets/assets/images/mockup.png": "173d14c8bc53acb198b7ee49be781e2c",
"assets/assets/images/cloud.png": "b9221382cc7f77c4a06aca27ce8aa6c2",
"assets/assets/images/mock.png": "12880551e6dfc5dfb24c364c86aee698",
"assets/assets/images/twitter.png": "9865c6fe80e43a836af1b8ac8d583b93",
"assets/assets/images/insta.png": "a89c9d1bcaf8e8139380ff6ac54663c4",
"assets/assets/images/linkedin.png": "c2d6881048682bc3ccc8ab679e5a688e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
