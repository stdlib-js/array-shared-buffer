// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,t=e,n=function(r){return t.call(r)},o=Object.prototype.hasOwnProperty,f=function(r,e){return null!=r&&o.call(r,e)},u="function"==typeof Symbol?Symbol.toStringTag:"",a=f,y=u,l=e,i=n,c=function(r){var e,t,n;if(null==r)return l.call(r);t=r[y],e=a(r,y);try{r[y]=void 0}catch(e){return l.call(r)}return n=l.call(r),e?r[y]=t:delete r[y],n},d=r&&"symbol"==typeof Symbol.toStringTag?c:i,p="function"==typeof SharedArrayBuffer,h="function"==typeof SharedArrayBuffer?SharedArrayBuffer:null,s=function(r){return p&&r instanceof SharedArrayBuffer||"[object SharedArrayBuffer]"===d(r)},S=h,b="function"==typeof SharedArrayBuffer?SharedArrayBuffer:null;return function(){var r,e,t;if("function"!=typeof S)return!1;try{t=(e=new S(16)).slice(4,8),r=s(e)&&s(t)&&16===e.byteLength&&4===t.byteLength}catch(e){r=!1}return r}()?b:function(r){throw new Error("not supported. The current environment does not support SharedArrayBuffers, and, unfortunately, SharedArrayBuffers cannot be polyfilled. For shared memory applications, upgrade your runtime environment to one which supports SharedArrayBuffers.")}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).SharedArrayBuffer=e();
//# sourceMappingURL=index.js.map
