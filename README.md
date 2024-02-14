<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# SharedArrayBuffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Constructor][mdn-sharedarraybuffer] returning an object used to represent a generic, fixed-length raw binary data buffer which can be used to create views of shared memory.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import SharedArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-shared-buffer@deno/mod.js';
```

#### SharedArrayBuffer( size )

Returns a [`SharedArrayBuffer`][mdn-sharedarraybuffer] having a specified number of bytes.

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var buf = new SharedArrayBuffer( 5 );
    // returns <SharedArrayBuffer>
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

* * *

### Properties

#### SharedArrayBuffer.length

Number of input arguments the constructor accepts.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var len = SharedArrayBuffer.length;
// returns 1
```

#### SharedArrayBuffer.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var buf = new SharedArrayBuffer( 5 );
    var byteLength = buf.byteLength;
    // returns 5
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

* * *

### Methods

#### SharedArrayBuffer.prototype.slice( \[start\[, end]] )

Copies the bytes of a [`SharedArrayBuffer`][mdn-sharedarraybuffer] to a new [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );

    var b2 = b1.slice();
    // returns <SharedArrayBuffer>

    var bool = ( b2 === b1 );
    // returns false
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

By default, the method copies from the beginning of the [`SharedArrayBuffer`][mdn-sharedarraybuffer]. To beginning copying from a different byte index, provide a `start` argument, specifying the starting byte index (inclusive).

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );
    var b2 = b1.slice( 2 );

    var nbytes = b2.byteLength;
    // returns 8
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

If `start < 0`, the index is relative to the end of the [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );
    var b2 = b1.slice( -2 );

    var nbytes = b2.byteLength;
    // returns 2
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

By default, the method copies to the end of the [`SharedArrayBuffer`][mdn-sharedarraybuffer]. To copy until a particular byte index, provide an `end` index, specifying the ending byte index (exclusive).

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );
    var b2 = b1.slice( 2, 6 );

    var nbytes = b2.byteLength;
    // returns 4
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

If `end < 0`, the index is relative to the end of the [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );
    var b2 = b1.slice( 2, -2 );

    var nbytes = b2.byteLength;
    // returns 6
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: update example to show explicit threading use case -->

<!-- eslint no-undef: "error" -->

<!-- eslint-disable no-unused-vars -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import toBinaryString from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-to-binary-string@deno/mod.js';
import SharedArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-shared-buffer@deno/mod.js';

function main() {
    var bytes;
    var buf;
    var arr;
    var i;

    // Create a new SharedArrayBuffer:
    buf = new SharedArrayBuffer( 64 );

    // Create a Float64 array buffer view:
    arr = new Float64Array( buf.byteLength/8 );
    for ( i = 0; i < arr.length; i++ ) {
        arr[ i ] = randu() * 100.0;
    }

    // Create a "bytes" view of the array buffer:
    bytes = new Uint8Array( arr.buffer );

    // Print the bytes:
    for ( i = 0; i < bytes.length; i++ ) {
        console.log( 'byte %d: %s', i, toBinaryString( bytes[ i ] ) );
    }
}

try {
    main();
} catch ( err ) {
    console.error( 'Environment does not provide SharedArrayBuffer support.' );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/buffer-ctor`][@stdlib/buffer/ctor]</span><span class="delimiter">: </span><span class="description">Buffer.</span>
-   <span class="package-name">[`@stdlib/array-buffer`][@stdlib/array/buffer]</span><span class="delimiter">: </span><span class="description">ArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/array-float32`][@stdlib/array/float32]</span><span class="delimiter">: </span><span class="description">Float32Array.</span>
-   <span class="package-name">[`@stdlib/array-float64`][@stdlib/array/float64]</span><span class="delimiter">: </span><span class="description">Float64Array.</span>
-   <span class="package-name">[`@stdlib/array-int16`][@stdlib/array/int16]</span><span class="delimiter">: </span><span class="description">Int16Array.</span>
-   <span class="package-name">[`@stdlib/array-int32`][@stdlib/array/int32]</span><span class="delimiter">: </span><span class="description">Int32Array.</span>
-   <span class="package-name">[`@stdlib/array-int8`][@stdlib/array/int8]</span><span class="delimiter">: </span><span class="description">Int8Array.</span>
-   <span class="package-name">[`@stdlib/array-uint16`][@stdlib/array/uint16]</span><span class="delimiter">: </span><span class="description">Uint16Array.</span>
-   <span class="package-name">[`@stdlib/array-uint32`][@stdlib/array/uint32]</span><span class="delimiter">: </span><span class="description">Uint32Array.</span>
-   <span class="package-name">[`@stdlib/array-uint8`][@stdlib/array/uint8]</span><span class="delimiter">: </span><span class="description">Uint8Array.</span>
-   <span class="package-name">[`@stdlib/array-uint8c`][@stdlib/array/uint8c]</span><span class="delimiter">: </span><span class="description">Uint8ClampedArray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-shared-buffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-shared-buffer

[test-image]: https://github.com/stdlib-js/array-shared-buffer/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/array-shared-buffer/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-shared-buffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-shared-buffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-shared-buffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-shared-buffer/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-shared-buffer/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-shared-buffer/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-shared-buffer/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-shared-buffer/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-shared-buffer/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-shared-buffer/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-shared-buffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-shared-buffer/main/LICENSE

[mdn-sharedarraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

<!-- <related-links> -->

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor/tree/deno

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer/tree/deno

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/deno

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/deno

[@stdlib/array/int16]: https://github.com/stdlib-js/array-int16/tree/deno

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32/tree/deno

[@stdlib/array/int8]: https://github.com/stdlib-js/array-int8/tree/deno

[@stdlib/array/uint16]: https://github.com/stdlib-js/array-uint16/tree/deno

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/deno

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/deno

[@stdlib/array/uint8c]: https://github.com/stdlib-js/array-uint8c/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
