'use strict';

// FUNCTIONS //

var pow = Math.pow,
	ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( lambda, k )
*	Partially applies parameters `lambda` and `k` and returns a function for evaluating the quantile function for a Weibull distribution.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Function} quantile function
*/
function partial( lambda, k ) {
	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Weibull distribution.
	*
	* @private
	* @param {Number} p - input probability
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p < 0 || p > 1 ) {
			throw new RangeError( 'quantile()::invalid input argument. Input probability must be on the interval [0,1]. Value: `' + p + '`.' );
		}
		return lambda * pow( -ln(1-p), 1/k );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
