webpackJsonp([0],{53:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(55),i=function(t){return t&&t.__esModule?t:{default:t}}(n),r={apiKey:"AIzaSyBntaQn3SVsGDq36gdiDrJOdcoJ86c8plY",authDomain:"hkoscon-2017.firebaseapp.com",databaseURL:"https://hkoscon-2017.firebaseio.com",storageBucket:"hkoscon-2017.appspot.com",messagingSenderId:"621449212856"};try{i.default.initializeApp(r)}catch(t){"app/duplicate-app"!==t.code&&console.error(t)}e.default=i.default},54:function(t,e,o){"use strict";function n(t,e){var o="https://iid.googleapis.com/iid/v1/"+t+"/rel/topics/"+e;return fetch(o,{headers:s,method:"POST"}).then(function(t){if(200===t.status)return!0;throw new Error(t)})}function i(t){navigator.serviceWorker.getRegistration().then(function(e){var o=t.notification;return e.showNotification(o.title,{icon:"https://hkoscon.org/logo.png",body:t.notifications.body,vibrate:[500,100,500]})})}var r=o(53),a=function(t){return t&&t.__esModule?t:{default:t}}(r),s={Authorization:"key=<SENDER_KEY>","Content-Type":"application/json"},c=a.default.messaging();c.requestPermission().then(function(){return navigator.serviceWorker.getRegistration()}).then(function(t){return c.useServiceWorker(t),c.getToken()}).then(function(t){return n(t,"broadcast")}).then(function(){return c.onMessage(i)}).catch(function(t){console.error("Unable to get permission to notify.",t)})}});
//# sourceMappingURL=0.js.map