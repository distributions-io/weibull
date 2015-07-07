'use strict';

// MODULES //

var partial = require( './partial.js' );


// MGF //

/**
* FUNCTION: mgf( out, matrix, lambda, k )
*	Evaluates the moment generating function (MGF) for a Weibull distribution with scale parameter `lambda` and shape parameter `k` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Matrix} output matrix
*/
function mgf( y, x, lambda, k ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'mgf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( lambda, k );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
