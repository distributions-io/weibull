'use strict';

/**
* FUNCTION: getPDF( lambda, k )
*	Returns a probability density function for a Weibull distribution with with scale parameter `lambda` and shape parameter `k`.
*
* @private
* @param {Number} lambda - shape parameter
* @param {Number} k - scale prameter
* @returns {Function} probability density function (PDF)
*/
function getPDF( lambda, k ) {
	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability distribution function at input value `x`.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		var logp;
		if ( x >= 0 ) {
			logp = Math.log( k ) - Math.log( lambda );
			logp +=  ( k - 1 ) * ( Math.log( x ) - Math.log( lambda ) );
			logp -= Math.pow( x/lambda, k );
			return Math.exp( logp );
		} else {
			return 0;
		}
	};
} // end FUNCTION getPDF()


// EXPORTS //

module.exports = getPDF;
