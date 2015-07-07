'use strict';

// FUNCTIONS //

var pow = Math.pow,
	ln = Math.log;


// QUANTILE //

/**
* FUNCTION: quantile( p, lambda, k )
*	Evaluates the quantile function for a Weibull distribution with scale parameter `lambda` and shape parameter `k` at a probability `p`.
*
* @param {Number} p - input probability
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} evaluated quantile function
*/
function quantile( p, lambda, k ) {
	if ( p < 0 || p > 1 ) {
		throw new RangeError( 'quantile()::invalid input argument. Input probability must be on the interval [0,1]. Value: `' + p + '`.' );
	}
	return lambda * pow( -ln(1-p), 1/k );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
