'use strict';

// MODULES //

var PDF = require( './number.js' );


// PDF //

/**
* FUNCTION: pdf( out, matrix, lambda, k )
*	Evaluates the probability density function (PDF) for a Weibull distribution with scale parameter `lambda` and shape parameter `k` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Matrix} output matrix
*/
function pdf( y, x, lambda, k ) {
	var len = x.length,
		i;
	if ( y.length !== len ) {
		throw new Error( 'pdf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = PDF( x.data[ i ], lambda, k );
	}
	return y;
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
