if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,r,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(r.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-67b89dd7"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/4r_logo.webp",revision:"69152497318f1d6ca6c71ed880b8b856"},{url:"assets/avatar/akari-ichika.png",revision:"b0750ccd043b8a1dc33ff015bae57467"},{url:"assets/avatar/aura-lily.png",revision:"c52b9531a64aef1f414ae42a42e526f7"},{url:"assets/avatar/cyanpile.png",revision:"f3e2f51944afdd59828d25d9edc06db4"},{url:"assets/avatar/gill-zuya-lestrange.png",revision:"e33e9594029250fa36835786210b0a3f"},{url:"assets/avatar/karen.png",revision:"a3940a5bac522defb4a4154eab75d794"},{url:"assets/avatar/kurokami-itsuki.png",revision:"b2a3f8ac252c892b4ba79880a223ddcc"},{url:"assets/avatar/mizuki-aoi.png",revision:"a20c7b8375c24b79ea3d771eae237410"},{url:"assets/avatar/raihan-ikeda.png",revision:"f37b3632859babd94b55cca2f5f1b992"},{url:"assets/avatar/vyula.png",revision:"138499993ffd57f5be04feae4d11198d"},{url:"assets/avatar/yua-deyanara.png",revision:"d89e2ffcdf24f0553b2a1f1eea6c193c"},{url:"assets/avatar/zian.png",revision:"3891c8db92413beeecf443888a91806d"},{url:"assets/characters/akari-ichika.webp",revision:"a630f7810f3d9f00210d1d0c7c1502d8"},{url:"assets/characters/aura-lily.webp",revision:"8450b22fd362259c3290ef8a8234ac8c"},{url:"assets/characters/cyanpile.webp",revision:"0cb28fe6b5d2ba92c41f0a2180b1778d"},{url:"assets/characters/gill-zuya-lestrange.webp",revision:"dc2e80105f10b209cd4181976bbeff65"},{url:"assets/characters/karen.webp",revision:"eb995f7c5bd6a49b6d030f3dc9a1074a"},{url:"assets/characters/kurokami-itsuki.webp",revision:"e05c394aaca5c30a7d8ce84b3e4ed7ce"},{url:"assets/characters/mizuki-aoi.webp",revision:"546eba6b7b40eea174dd39a1c0762dcf"},{url:"assets/characters/raihan-ikeda.webp",revision:"2d6605dc0bf66d632887909a3189f264"},{url:"assets/characters/vyula.webp",revision:"e93fbf1bd2643b112ee0affa4d21c0ea"},{url:"assets/characters/yua-deyanara.webp",revision:"6a3b1ad45d557dbbd56f580b593e2a47"},{url:"assets/characters/zian.webp",revision:"1edbd003f894ff021d859478870c0b6a"},{url:"assets/favicon.png",revision:"52e6b5e790e33dc6b487ddc332f10c2d"},{url:"assets/icons/128x128.png",revision:"6cc01af4663072b68656504a963ad38b"},{url:"assets/icons/512x512.png",revision:"8cd6ddbc41a4d08e9cacb505f97c81ed"},{url:"assets/icons/72x72.png",revision:"6cc042f0d98f69d998eeef29e620d533"},{url:"assets/icons/maskable_icon_x1.png",revision:"702d588e4be5060d4dd295cf676b63a7"},{url:"assets/index.3d870655.js",revision:"880c85b57814fa6c216608f017235b41"},{url:"assets/particles/circle.png",revision:"b18a48b90647c8674454f7a5101c8500"},{url:"assets/particles/crosses.png",revision:"f9ca0a52b06aad4ea01dc82f7c011295"},{url:"assets/particles/lines.png",revision:"407d1c4e1d48c1e8609cf64e3109b016"},{url:"assets/particles/rectangles-dot.png",revision:"c154ddbee8e6fb5c0806b05fad1ac371"},{url:"assets/particles/triangle.png",revision:"ec75ec92e6c3826d6542db08093f6a5d"},{url:"assets/particles/wave.png",revision:"b9be9eea6ba7128aaf79b21074a5df05"},{url:"assets/style.ad717e51.css",revision:"7cdb18e492791e299cebf4317d55c26a"},{url:"assets/thumbnail.png",revision:"7109ef781627f8a206f2f693587719b3"},{url:"index.html",revision:"50cd9d7f5070eb1742a238ec6a356f6f"},{url:"manifest.json",revision:"615295299262429ed5918cb1d79fd2bb"}],{})}));
//# sourceMappingURL=sw.js.map