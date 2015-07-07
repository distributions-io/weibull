'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	isPositive = require( 'validate.io-positive-primitive' ),
	mean = require( './mean.js' ),
	variance = require( './variance.js' );


// FUNCTIONS //

var sqrt = Math.sqrt,
	pow = Math.pow;


// SKEWNESS //

/**
* FUNCTION: skewness( lambda, k )
*	Computes the distribution skewness.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution skewness
*/
function skewness( lambda, k ) {
	var sigma,
		mu,
		a, b;

	if ( !isPositive( lambda ) || !isPositive( k ) ) {
		throw new TypeError( 'skewness()::invalid input argument. Both arguments must be positive numbers. Values: `[' + lambda + ',' + k + ']`.' );
	}
	mu = mean( lambda, k );
	sigma = sqrt( variance( lambda, k ) );

	a = gamma( 1 + 3/k )*pow( lambda, 3 ) - 3*mu*pow( sigma, 2 ) - pow( mu, 3 );
	b = pow( sigma, 3 );

	return a / b;
} // end FUNCTION skewness()


// EXPORTS //

module.exports = skewness;
