'use strict';

// MODULES //

var partial = require( './partial.js' );


// MGF //

/**
* FUNCTION: mgf( out, arr, lambda, k )
*	Evaluates the moment generating function (MGF) for a Weibull distribution with scale parameter `lambda` and shape parameter `k` for each array element.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function mgf( y, x, lambda, k ) {
	var len = x.length,
		fcn,
		i;

	fcn = partial( lambda, k );
	for ( i = 0; i < len; i++ ) {
		if ( typeof x[ i ] === 'number' ) {
			y[ i ] = fcn( x[ i ] );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
