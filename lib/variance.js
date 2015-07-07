'use strict';

// MODULES //

var gamma = require( 'gamma' );


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
	return pow( lambda, 2 ) * ( gamma( 1 + 2/k ) - pow( gamma( 1 + 1/k ), 2 ) );
} // end FUNCTION variance()


// EXPORTS //

module.exports = variance;
