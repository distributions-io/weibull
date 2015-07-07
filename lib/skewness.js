'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	mean = require( './mean.js' ),
	variance = require( './variance.js' );


// FUNCTIONS //

var sqrt = Math.sqrt,
	pow = Math.pow;


// SKEWNESS //

/**
* FUNCTION: skewness( lambda, k )
*	Computes the skewness of a Weibull distribution having scale parameter `lambda` and shape parameter `k`.
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
	sigma = sqrt( variance( lambda, k ) );

	a = gamma( 1 + 3/k )*pow( lambda, 3 ) - 3*mu*pow( sigma, 2 ) - pow( mu, 3 );
	b = pow( sigma, 3 );

	return a / b;
} // end FUNCTION skewness()


// EXPORTS //

module.exports = skewness;
