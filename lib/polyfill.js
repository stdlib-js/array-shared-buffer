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

'use strict';

var format = require('@stdlib/error-tools-fmtprodmsg');

// MAIN //

/**
* Constructor returning an object used to represent a generic, fixed-length raw binary data buffer which can be used to create views of shared memory.
*
* @param {NonNegativeInteger} size - number of bytes
* @throws {Error} not implemented
*/
function polyfill( size ) { // eslint-disable-line no-unused-vars
	throw new Error( format('01T09') );
}

// EXPORTS //

module.exports = polyfill;
