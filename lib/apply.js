'use strict';

// MODULES //

var isArrayLike = require( 'validate.io-array-like' ),
	isMatrixLike = require( 'validate.io-matrix-like' ),
	isNumber = require( 'validate.io-number-primitive' ),
	matrix = require( 'dstructs-matrix' );


// APPLY //

/**
* FUNCTION: apply( fun, x )
*	Applies function `fun` to all elements in `x`.
*
* @private
* @param {Function} fun - function to be applied
* @param {Number|Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} x - input object
* @returns {Array|Matrix|Number} function value(s)
*/
function apply( fun, x ) {

	var len, out, val, i;
	if ( isNumber( x ) ) {
		return fun( x );
	}
	if ( isMatrixLike( x ) ) {
		len = x.length;
		// Create an output matrix:
		out = matrix( new Float64Array( len ), x.shape );
		for ( i = 0; i < len; i++ ) {
			out.data[ i ] = fun( x.data[ i ] );
		}
		return out;
	}
	if ( isArrayLike( x ) ) {
		len = x.length;
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			val = x[ i ];
			if ( !isNumber( val ) ) {
				out[ i ] = NaN;
			} else {
				out[ i ] = fun( val );
			}
		}
		return out;
	}
	return NaN;
}

module.exports = apply;
