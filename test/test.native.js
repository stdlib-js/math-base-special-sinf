/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var f32 = require( '@stdlib/number-float64-base-to-float32' );
var PINF = require( '@stdlib/constants-float32-pinf' );
var NINF = require( '@stdlib/constants-float32-ninf' );
var isNegativeZerof = require( '@stdlib/math-base-assert-is-negative-zerof' );
var isPositiveZerof = require( '@stdlib/math-base-assert-is-positive-zerof' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );


// VARIABLES //

var sinf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( sinf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sinf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the sine (medium negative values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine (medium positive values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine (large negative values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largeNegative.x;
	expected = largeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine (large positive values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largePositive.x;
	expected = largePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine (huge negative values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = hugeNegative.x;
	expected = hugeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine (huge positive values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	expected = hugePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = sinf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `+infinity`', opts, function test( t ) {
	var v = sinf( PINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `-infinity`', opts, function test( t ) {
	var v = sinf( NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v = sinf( f32( -0.0 ) );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v = sinf( f32( 0.0 ) );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );
	t.end();
});
