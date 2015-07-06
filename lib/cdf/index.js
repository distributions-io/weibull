'use strict';

/**
* FUNCTION: getCDF( lambda, k )
*	Returns a cumulative distribution function for a Weibull distribution with with scale parameter `lambda` and shape parameter `k`.
*
* @private
* @param {Number} lambda - shape parameter
* @param {Number} k - scale prameter
* @returns {Function} cumulative density function (CDF)
*/
function getCDF( lambda, k ) {
	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function at input value `x`.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
        if (  x >= 0 ) {
			return 1 - Math.exp( - Math.pow( x/lambda, k ) );
		} else {
			return 0;
		}
	};
} // end FUNCTION getCDF()


// EXPORTS //

module.exports = getCDF;
