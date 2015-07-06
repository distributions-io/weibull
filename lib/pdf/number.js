'use strict';

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
	var logp;
	if ( x < 0 ) {
		return 0;
	}
	logp = Math.log( k ) - Math.log( lambda );
	logp +=  ( k-1 ) * ( Math.log(x)-Math.log(lambda) );
	logp -= Math.pow( x/lambda, k );

	return Math.exp( logp );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
