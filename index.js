// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,t=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,o="function"==typeof n?n.toStringTag:"",f=e&&"symbol"==typeof Symbol.toStringTag?function(e){var n,f,u,a,l;if(null==e)return r.call(e);f=e[o],l=o,n=null!=(a=e)&&t.call(a,l);try{e[o]=void 0}catch(t){return r.call(e)}return u=r.call(e),n?e[o]=f:delete e[o],u}:function(e){return r.call(e)},u="function"==typeof SharedArrayBuffer;function a(e){return u&&e instanceof SharedArrayBuffer||"[object SharedArrayBuffer]"===f(e)}var l,i="function"==typeof SharedArrayBuffer?SharedArrayBuffer:null,y="function"==typeof SharedArrayBuffer?SharedArrayBuffer:null;return l=function(){var e,r,t;if("function"!=typeof i)return!1;try{t=(r=new i(16)).slice(4,8),e=a(r)&&a(t)&&16===r.byteLength&&4===t.byteLength}catch(r){e=!1}return e}()?y:function(e){throw new Error(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("01T09"))},l},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).SharedArrayBuffer=r();
//# sourceMappingURL=index.js.map
