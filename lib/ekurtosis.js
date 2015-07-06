'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	mean = require( './mean.js' ),
	variance = require( './variance.js' ),
	skewness = require( './skewness.js' );


// EXCESS KURTOSIS //

/**
* FUNCTION: ekurtosis( lambda, k )
*	Returns the excess kurtosis of a Weibull distribution having scale parameter `lambda` and shape parameter `k`.
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

	mu = mean( lambda, k );
	s2 = variance( lambda, k );
	sigma = Math.sqrt( s2 );
	s3 = Math.pow( sigma, 3 );
	skew = skewness( lambda, k );

	a = Math.pow( lambda, 4 ) * gamma( 1 + 4/k );
	a -= 4 * skew * s3 * mu;
	a -= 6 * Math.pow( mu, 2 ) * s2;
	a -= Math.pow( mu, 4 );

	b = Math.pow( s2, 2 );

	return a / b;
} // end FUNCTION ekurtosis()


// EXPORTS //

module.exports = ekurtosis;
