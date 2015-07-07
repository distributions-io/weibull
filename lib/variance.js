'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	isPositive = require( 'validate.io-positive-primitive' );


// FUNCTIONS //

var pow = Math.pow;


// VARIANCE //

/**
* FUNCTION: variance( lambda, k )
*	Computes the variance of a Weibull distribution having scale parameter `lambda` and shape parameter `k`.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution variance
*/
function variance( lambda, k ) {
	if ( !isPositive( lambda ) || !isPositive( k ) ) {
		throw new TypeError( 'variance()::invalid input argument. Both arguments must be positive numbers. Values: `[' + lambda + ',' + k + ']`.' );
	}
	return pow( lambda, 2 ) * ( gamma( 1 + 2/k ) - pow( gamma( 1 + 1/k ), 2 ) );
} // end FUNCTION variance()


// EXPORTS //

module.exports = variance;
