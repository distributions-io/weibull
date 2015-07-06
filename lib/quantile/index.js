'use strict';

/**
* FUNCTION: getQuantileFunction( a, b )
*	Returns a quantile function for a Weibull distribution with shape parameter `lambda` and scale parameter `k`.
*
* @private
* @param {Number} lambda - shape parameter
* @param {Number} k - scale parameter
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
		if ( p < 0 || p > 1 ) {
			return NaN;
		}
		return lambda * Math.pow( -Math.log( 1 - p ), 1/k );
	};
} // end FUNCTION getQuantileFunction()


// EXPORTS //

module.exports = getQuantileFunction;
