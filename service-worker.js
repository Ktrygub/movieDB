"use strict";var precacheConfig=[["/gl-jsprocamp-react/index.html","d614c2ba04508288ceaa22752121ec85"],["/gl-jsprocamp-react/static/css/main.772c8c66.css","8ab82f9657879287d4d8db72c64390b7"],["/gl-jsprocamp-react/static/js/main.5d8118df.js","9799012dddb5903ea81b10a3ab448d0f"],["/gl-jsprocamp-react/static/media/background.26f57bf9.jpg","26f57bf935104e26e9818fb880ea79c2"],["/gl-jsprocamp-react/static/media/film_strip.155d80a7.png","155d80a7fdae97e903ee4c2718ded7e4"],["/gl-jsprocamp-react/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/gl-jsprocamp-react/static/media/icons.263bfe56.eot","263bfe56755cefdc9e6c3d8070e0868d"],["/gl-jsprocamp-react/static/media/icons.27c88389.woff2","27c88389f00e0d8bfeebebae81f240b6"],["/gl-jsprocamp-react/static/media/icons.7bc63d50.woff","7bc63d50d4158c6bfd4b30a99c9f9460"],["/gl-jsprocamp-react/static/media/icons.b42b4467.svg","b42b446772f84a277ee29a0615b38800"],["/gl-jsprocamp-react/static/media/icons.d3490a32.ttf","d3490a32350db6c9c41e69cc9ce99cd0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var n=new Request(r,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),t=urlsToCacheKeys.has(r));var a="/gl-jsprocamp-react/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});