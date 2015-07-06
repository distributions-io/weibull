'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	mean = require( './mean.js' ),
	variance = require( './variance.js' );


// SKEWNESS //

/**
* FUNCTION: skewness( lambda, k )
*	Returns the skewness of a Weibull distribution having scale parameter `lambda` and shape parameter `k`.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution skewness
*/
function skewness( lambda, k ) {
	var sigma,
		mu,
		a, b;

	mu = mean( lambda, k );
	sigma = Math.sqrt( variance( lambda, k ) );

	a = gamma( 1 + 3/k )*Math.pow( lambda, 3 ) - 3*mu*Math.pow( sigma, 2 ) - Math.pow( mu, 3 );
	b = Math.pow( sigma, 3 );

	return a / b;
} // end FUNCTION skewness()


// EXPORTS //

module.exports = skewness;
