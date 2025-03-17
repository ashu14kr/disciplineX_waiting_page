'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6cb8d9d370b2b5d6aac18410e48acaa3",
"version.json": "245fefb4a0cc0ef0eee8d25320227a84",
"index.html": "d22c681e0d7733977eab886adac9f6da",
"/": "d22c681e0d7733977eab886adac9f6da",
"CNAME": "da49d156d44a5c3dfcf067e650d807f9",
"main.dart.js": "4e45f9b3b81ea0c749bf5d310c2836e6",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cc46981f73a1117282b46aabf50fba8d",
".git/config": "065a9d4ff96ceae10a942189d9dc2289",
".git/objects/59/2ee0133cb38cf792a06ad0009db82d7ab787df": "7a5375aeb0fd0e91795572e003748044",
".git/objects/59/7f6cd497842956f04ff6592350dee9841a23c4": "d0d47e40129d34fc2174504c1405aa37",
".git/objects/59/a1f408c977d3830bc3636077d008b025f54370": "2f3918ba69c4edea41b65de77d9ae3f8",
".git/objects/68/0c2e5a052dc6056e450d936d5a6c6fd27a4ea4": "d0e677b5813d2bafb9c9ceec4ad13bcd",
".git/objects/57/893dd016fd6b353a08898f3a4943fa2f46a604": "20b80f2d1fcee470cf849d1646ac8efc",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "b1ba15563aa055cd2249df3893ce32b4",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/94/2d52335b0a7af1224ec6218af23c9ce89d5c57": "bfe0530efd177936cf24a353f701bb3f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/9d/c144137669104241dc6cc2e8c6a36dbeaa943a": "b3916666bbda41f9263de60107a9d6d8",
".git/objects/b2/5eb6a8eaf6f20a7c99da9c1a13bdacd288c214": "3ff7f22804e128773039f7955be53d05",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/bb/820f35e43fd8a281e11967f737b97e27a872c5": "b2962d1e23bb4af1cb7edef73d36adab",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "2d21dcb62774f28dd83eb4b98859b3f3",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d1/1107fd0967d0ca95d4fe823a1589aabd66f05c": "e2cac0ca6d3062c791c6169243b9fca3",
".git/objects/d1/4000e70b53bff27fd999fa218e5337045e1de0": "d542ac206965b315fb5ff00683b4e2e0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d6/ea8e034e7cdba62d9a25343f8879d30f7782d1": "c86cc9996c66ed364a66d41a1c4ea28b",
".git/objects/d8/c937c3b168d1ca947d06c8030f284485539505": "a5b4fa86f388a1247b2f64556c081270",
".git/objects/e5/3784e9d830b75bae5b4f17f0cc1fe4c7e387f9": "9228ee36453be9aa289375ae5cd16e3a",
".git/objects/e2/11756873bd775c87fa13391433d99c7cf38b6f": "53234b257bd64974e76b7484142c348e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/fd/9258df96525b714205ae608fdfffa88f6d1fb0": "e038aa46276435816fb6d7b5ce1056bf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/cf/948777d4c4cb6c96e8ec99343eadc98d082c63": "0c7ebe0c3503100c36ae39ec5dfdc0a3",
".git/objects/ca/44ee0bec1651fb61dfc6e21d87cf09a4c72182": "6637dbdb1458fc90c0dc7b878c41164d",
".git/objects/fe/5889daabc75838efe7e45aa8d0bb6bbedcec86": "1e7eaf491fe97860999f78247b31ec69",
".git/objects/c1/3280ab983bff67dc8cd631d00fda024bcd4227": "3e7c617c7bc79b707a243787c58d9e1e",
".git/objects/c6/c26a5145511527d308f62831f1775fc93e94b0": "5a3a30b1d1457677558db6217e06b577",
".git/objects/c6/ddc92397c41742812397aae756739854e5372d": "8b24e37300aea0cc6b30bb4f5125d469",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/20/90c37e50af6d0c701f4dc3cc7aec7b8e4dd39b": "734f7e66e4870e5ed014ffdebda11213",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/4b/cac61a88a950926ee5d6318dc1df65aadc375c": "9cc267fa96305024a432b8d60df70737",
".git/objects/4b/09c19684e8a0dcb6e4bc180f8d4855d76f255b": "993047ac4e004a14c7dfc8dad32dfb74",
".git/objects/42/bbcb1e862bafa31dc6202e012e5fde9512e33b": "05b89b92e71e232ddcd28c2f285fee75",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/28/7b91747caf728b53b0f913ee3cf6ca995a4385": "5a11dc0f98e15ae0a3b6ac5e822ac786",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "a37fe3b0c3394a335dd57a1b37db0d6b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/84d6ee31dc77538a5d42a75f938dd6a618eb9a": "0acd3dc4f7d545f9f8d571bcf355876d",
".git/objects/21/56019b752a1b9000c28919933f26eace56127b": "09b25eeb0fbdfd6f05995caf964ec522",
".git/objects/81/4c911e1a3d68743e83c3c7dd12a31a9defb36e": "85bc4476451fbb287caa182df8aa077c",
".git/objects/86/d607387df9fa7936fc1bd689b36b6c07b6c9fe": "7ea1542f6a4aceff7b8e8edbae804708",
".git/objects/72/04835b9f966d1192afda87e80f3a018a308030": "b27a6d46c8248d918ebc29872e1dfb24",
".git/objects/88/45ebae5ee8e1337c0f2c69082d2bde0bd50fc0": "d6f06374c0e75f1d2842303ee8cf8f8d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/dc18feb56be0d7b69b6f88c6d6356b0782532a": "95c3b3a0679b1500167dd1f524ad8484",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "7f7b221c21a4daf44b542e74c57fd2e8",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/98/c540fd8b39557f6172a2322aeb01c67c0cf952": "6ca881e95c5256fefc27ee37715ab85f",
".git/objects/98/5501bbaa08a82891535d2566e10691280bb072": "6c6cc8afdb2546509e1a0401004d8261",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "cc2f59f9a1870d89b90ed5cdb59de116",
".git/objects/53/082e1f125dbe039eb4f7ca5fb17c561f9b2e63": "db6edd6f623f6c723c9117e56b2386d3",
".git/objects/53/f3d63d80ec8d07e04884d8c44a7cc47b92346e": "d9a15d94fa5c69735a9f22741c853801",
".git/objects/08/d076f8bc68758c46d991ad6ef0d2958b1f3ebe": "2d09f3481b84a42e54a1c6a148059de5",
".git/objects/01/5c4eae24d7c9210e5beea93ff812f78a7346e8": "dd14b3c397316e561330f92a0f15a710",
".git/objects/01/62a77ac63851bf3774973963abe2138954b6f6": "1cf6981c2e8ca4a7110a26834b17bb15",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/441c0fe862b5fc42f428322327857b5ad7c0ee": "7fbe7aa37bafe7f18722b585b5bf0d23",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/b8/648131c51a290cf7599cdabb81ea845f2302b1": "7735560261f0822870bcaed474e88e1d",
".git/objects/b8/9de9be378704a047a952ef202059d2c9321b5a": "9952254f7f92dfd1d9cd2592a689f8c2",
".git/objects/b6/40f479ceee8514c6903c6f51689e9743a4faeb": "dc3db9e8e7639b4d7b244876ee270bc5",
".git/objects/a9/02948960ae469ba67cffa8029f2f3ccbc4b0a2": "c7927be469e0b3d8cb098ac921adccf9",
".git/objects/b7/da216c89009ceb5fa7f1b4ccb9e5ea584fa5b6": "7c7067f29dcfe0371ba66addfc05f0cc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/2ee5fa9b0c878eaa3c74e19205b5bd0f1c864e": "8c83c1d40bbbd867ae6f7ca5bafb926d",
".git/objects/b9/99747915d0c2eb58eb5974a630d17a6c31a489": "0579147cbbbeb4a9252d84484b4f5b23",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/c4/4fccea5bfade1e3ba1cb6e26ab59316f6a5431": "85948a9fd18e44d5dc607726bf304d3a",
".git/objects/f9/a04e2edd2d0da454de136392ac52865d411bbd": "9cac0faf7ca6316ef70d4b69691b087e",
".git/objects/f9/3d93870766884422ce58e267eccf10eeeb2038": "df1cc9a5c712a81c74ef0ac557274897",
".git/objects/f7/8ee545e8cfaf03508c5e5a2c688f708c0344b2": "d17c138060eb16351079fab0eda31325",
".git/objects/e8/e6db26630a125074371745e002e13fac6e616e": "d87b3b420be47b171ab28ab6b8775d4e",
".git/objects/c5/dfde257890d08eba877ea578e5085adc505762": "caee5cb58a3f258c1b2683279ebe77b9",
".git/objects/c2/2a93e49aacb7bddd320fe94471f38290965bd7": "8a029331584524c1856a9673f507eb1e",
".git/objects/f6/d26948641123a5278fffbba8afd8d108065983": "70fa96cb8a4d4a4b05a2d3e395519d30",
".git/objects/f6/1202577bc116dfa8d7f4732094e7c667c095f7": "3f3e8c7b662f9a5f3d849db8ab9e75c5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/f1/a0a3b2c8d5484b9ea0480f8a3dd0c5c30011e3": "39b0d97f0d41d0e0339ca3e40f40e0ab",
".git/objects/cb/dc93e8939171d14908856f81d95eaf7cd9cf92": "665c53634f939f84354f6bf7929a919b",
".git/objects/cb/cb8ea319fca3222dfc8d60f48187bc4428e305": "c1894025957590cb0f0e24c9fbb49289",
".git/objects/ce/48bc921e79c547c26999f78c7e0aff800ff1be": "2693724e546c7af605f0d76673e8d10d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/41/88cb2466ad01fd43281c95076b6f7c67ef4302": "6b9ed8ca5988dcd2c44fa7d7c1e3f07b",
".git/objects/23/1f08d94fe7bab3df45ab5956bbeba371d43fd2": "212410ca9317d7c9d6967f544b5b4aa2",
".git/objects/4f/62dbfe7d984fde7c6e90afebf59a18046986ce": "d25f19d7a7d129eb86053beb3c64f244",
".git/objects/4f/c1de1c106af3322779e5623932bd6097af911e": "8cc67e7a9fade10bfdfe25422616d7cd",
".git/objects/12/2cc3a348f8b955567206e46f15efa08413692a": "229db35765f29750df98e4802705e29e",
".git/objects/12/8d5d356184aa88e229bf6ff1485ec4f8a97a68": "eccb3bbd2cde874665a30f6826a6f4fb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "cceba5641e940f5b7a4d3593f5493386",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/76/695e0a8d55fe6fc1f88cd3ae489687741618b8": "6f9f689dfe52904d390d94ade612041c",
".git/objects/76/317cb2e961105441e47b4f2f2b00a6c6a80706": "ee9a295e6c3f9f823c92cf4651e58a60",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/49/b84e635a8d4de909fbd6a34026e113bdcca0e2": "c5e091080c7c18b9cb86ba542e3ebe5a",
".git/objects/49/b105baa8407d5c3ad2cf096b8ea2c392c3fe80": "0ec7b1e26685d73246f6f42eb6968e08",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/40/533b5dcd66f94d03649df3edba726003c6b10a": "8bcb026e1bf3a475ad3e244d6baf3407",
".git/objects/8b/292e5184bd7fea1830b27fad53a2992224379c": "61b11157dae4a6db530620404ee261f2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "881d4932c82d585a95dacf0e5ce41b59",
".git/logs/refs/heads/main": "e9d1a200eda3becbb5d125e974020e0b",
".git/logs/refs/remotes/origin/main": "a18582af84c43a27fbd8f5f35e552433",
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
".git/refs/heads/main": "a0d05524e8e2af94244e4477de5f5201",
".git/refs/remotes/origin/main": "a0d05524e8e2af94244e4477de5f5201",
".git/index": "95f8303d453e8257c07d74c3229bab27",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "8d74226c972593c18a975c50b375a463",
"assets/NOTICES": "70c246394309b4ed3b644789b2cc18d9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "feb1c69cbae45a022beb907f006f6851",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e2b0ac219066803b54fc64701cf7c96b",
"assets/fonts/MaterialIcons-Regular.otf": "e8f9052ab054419c8e4422a83e2c26b8",
"assets/assets/images/mail.png": "7fabf5078033d12a010c1c836ed1afb6",
"assets/assets/images/mockup.png": "173d14c8bc53acb198b7ee49be781e2c",
"assets/assets/images/logo.png": "43221c2448b43f23947208311732c38b",
"assets/assets/images/cloud.png": "b9221382cc7f77c4a06aca27ce8aa6c2",
"assets/assets/images/mock.png": "12880551e6dfc5dfb24c364c86aee698",
"assets/assets/images/twitter.png": "9865c6fe80e43a836af1b8ac8d583b93",
"assets/assets/images/insta.png": "a89c9d1bcaf8e8139380ff6ac54663c4",
"assets/assets/images/linkedin.png": "c2d6881048682bc3ccc8ab679e5a688e",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
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
