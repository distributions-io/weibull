'use strict';

// FUNCTIONS //

var pow = Math.pow,
	exp = Math.exp,
	ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( lambda, k )
*	Partially applies parameters `lambda` and `k` and returns a function for evaluating the probability density function (PDF) for a Weibull distribution.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Function} PDF
*/
function partial( lambda, k ) {
	var lnl = ln( lambda ),
		d = ln( k ) - lnl,
		j = k - 1;

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Weibull distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		var lnp;
		if ( x < 0 ) {
			return 0;
		}
		lnp = d + j*( ln(x)-lnl );
		lnp -= pow( x/lambda, k );
		return exp( lnp );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
