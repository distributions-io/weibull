'use strict';

// MODULES //

var gamma = require( 'gamma' );


// MEAN //

/**
* FUNCTION: mean( lambda, k )
*	Computes the mean of a Weibull distribution having scale parameter `lambda` and shape parameter `k`.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution mean
*/
function mean( lambda, k ) {
	return lambda * gamma( 1 + 1/k );
} // end FUNCTION mean()


// EXPORTS //

module.exports = mean;
