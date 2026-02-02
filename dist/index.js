"use strict";var o=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var a=o(function(h,u){"use strict";var i=typeof SharedArrayBuffer=="function"?SharedArrayBuffer:null;u.exports=i});var s=o(function(c,n){"use strict";function f(t){throw new Error("not supported. The current environment does not support SharedArrayBuffers, and, unfortunately, SharedArrayBuffers cannot be polyfilled. For shared memory applications, upgrade your runtime environment to one which supports SharedArrayBuffers.")}n.exports=f});var p=require("@stdlib/assert-has-sharedarraybuffer-support"),l=a(),y=s(),e;p()?e=l:e=y;module.exports=e;
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
