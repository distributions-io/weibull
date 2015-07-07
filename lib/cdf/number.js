'use strict';

// FUNCTIONS //

var pow = Math.pow,
	exp = Math.exp;


// CDF //

/**
* FUNCTION: cdf( x, lambda, k )
*	Evaluates the cumulative density function (CDF) for a Weibull distribution with scale parameter `lambda` and shape parameter `k` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, lambda, k ) {
	if ( x < 0 ) {
		return 0;
	}
	return 1 - exp( -pow( x/lambda, k ) );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
