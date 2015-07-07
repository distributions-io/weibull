'use strict';

// FUNCTIONS //

var pow = Math.pow,
	exp = Math.exp,
	ln = Math.log;


// PDF //

/**
* FUNCTION: pdf( x, lambda, k )
*	Evaluates the probability density function (PDF) for a Weibull distribution with scale parameter `lambda` and shape parameter `k` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, lambda, k ) {
	var lnl,
		lnp;
	if ( x < 0 ) {
		return 0;
	}
	lnl = ln( lambda );
	lnp = ln( k ) - lnl;
	lnp += ( k-1 ) * ( ln(x)-lnl );
	lnp -= pow( x/lambda, k );

	return exp( lnp );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
