'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	logFactorial = require( 'compute-factorialln' );


// VARIABLES //

var EPSILON = 1e-12;


// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( lambda, k )
*	Partially applies parameters `lambda` and `k` and returns a function for evaluating the moment generating function (MGF) for a Weibull distribution.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Function} MGF
*/
function partial( lambda, k ) {
	var lnl;
	if ( k < 1 ) {
		throw new RangeError( 'mgf()::invalid input argument. The MGF is only defined for `k >= 1`. Value: `' + k + '`.' );
	}
	lnl = ln( lambda );

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment generating function (MGF) for a Weibull distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		var pws = 1,
			n = 0,
			sumln,
			c;

		if ( t === 0 ) {
			return 1;
		}
		sumln = ln( t ) + lnl;
		do {
			n += 1;
			c = n*sumln - logFactorial( n ) + gamma.log( 1 + n/k );
			pws += exp( c );
		} while ( c/pws > EPSILON );

		return pws;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
