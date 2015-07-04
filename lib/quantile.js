'use strict';

/**
* FUNCTION: getQuantileFunction( a, b )
*	Returns a quantile function for a Weibull distribution with with scale parameter `lambda` and shape parameter `k`.
*
* @private
* @param {Number} lambda - shape parameter
* @param {Number} k - scale prameter
* @returns {Function} quantile function
*/
function getQuantileFunction( lambda, k ) {
	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function at input value `p`.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		return ( 0 <= p && p <= 1 ) ? lambda * Math.pow( -Math.log( 1 - p ) , 1/k ) : NaN;
	};
} // end FUNCTION getQuantileFunction()


// EXPORTS //

module.exports = getQuantileFunction;
