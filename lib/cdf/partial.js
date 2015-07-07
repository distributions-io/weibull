'use strict';

// FUNCTIONS //

var pow = Math.pow,
	exp = Math.exp;


// PARTIAL //

/**
* FUNCTION: partial( lambda, k )
*	Partially applies parameters `lambda` and `k` and returns a function for evaluating the cumulative density function (CDF) for a Weibull distribution.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Function} CDF
*/
function partial( lambda, k ) {
	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative density function (CDF) for a Weibull distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		if ( x < 0 ) {
			return 0;
		}
		return 1 - exp( -pow( x/lambda, k ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
