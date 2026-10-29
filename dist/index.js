"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(i){throw r=0,i}}};var a=o(function(c,u){"use strict";var f=typeof SharedArrayBuffer=="function"?SharedArrayBuffer:null;u.exports=f});var s=o(function(v,n){"use strict";function p(t){throw new Error("not supported. The current environment does not support SharedArrayBuffers, and, unfortunately, SharedArrayBuffers cannot be polyfilled. For shared memory applications, upgrade your runtime environment to one which supports SharedArrayBuffers.")}n.exports=p});var l=require("@stdlib/assert-has-sharedarraybuffer-support"),y=a(),d=s(),e;l()?e=y:e=d;module.exports=e;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
