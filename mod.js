// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,o="function"==typeof n?n.toStringTag:"";var a=r&&"symbol"==typeof Symbol.toStringTag?function(r){var n,a,f,u,y;if(null==r)return e.call(r);a=r[o],y=o,n=null!=(u=r)&&t.call(u,y);try{r[o]=void 0}catch(t){return e.call(r)}return f=e.call(r),n?r[o]=a:delete r[o],f}:function(r){return e.call(r)},f="function"==typeof SharedArrayBuffer;function u(r){return f&&r instanceof SharedArrayBuffer||"[object SharedArrayBuffer]"===a(r)}var y="function"==typeof SharedArrayBuffer?SharedArrayBuffer:null;var l="function"==typeof SharedArrayBuffer?SharedArrayBuffer:null;var c=function(){var r,e,t;if("function"!=typeof y)return!1;try{t=(e=new y(16)).slice(4,8),r=u(e)&&u(t)&&16===e.byteLength&&4===t.byteLength}catch(e){r=!1}return r}()?l:function(r){throw new Error("not supported. The current environment does not support SharedArrayBuffers, and, unfortunately, SharedArrayBuffers cannot be polyfilled. For shared memory applications, upgrade your runtime environment to one which supports SharedArrayBuffers.")};export{c as default};
//# sourceMappingURL=mod.js.map
