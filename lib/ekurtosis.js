'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	isPositive = require( 'validate.io-positive-primitive' ),
	mean = require( './mean.js' ),
	variance = require( './variance.js' ),
	skewness = require( './skewness.js' );


// FUNCTIONS //

var sqrt = Math.sqrt,
	pow = Math.pow;


// EXCESS KURTOSIS //

/**
* FUNCTION: ekurtosis( lambda, k )
*	Computes the distribution excess kurtosis.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution excess kurtosis
*/
function ekurtosis( lambda, k ) {
	var sigma,
		skew,
		mu,
		s2,
		s3,
		a, b;

	if ( !isPositive( lambda ) || !isPositive( k ) ) {
		throw new TypeError( 'ekurtosis()::invalid input argument. Both arguments must be positive numbers. Values: `[' + lambda + ',' + k + ']`.' );
	}
	mu = mean( lambda, k );
	s2 = variance( lambda, k );
	sigma = sqrt( s2 );
	s3 = pow( sigma, 3 );
	skew = skewness( lambda, k );

	a = pow( lambda, 4 ) * gamma( 1 + 4/k );
	a -= 4 * skew * s3 * mu;
	a -= 6 * pow( mu, 2 ) * s2;
	a -= pow( mu, 4 );

	b = pow( s2, 2 );

	return a / b;
} // end FUNCTION ekurtosis()


// EXPORTS //

module.exports = ekurtosis;
