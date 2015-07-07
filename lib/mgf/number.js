'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	logFactorial = require( 'compute-factorialln' );


// VARIABLES //

var EPSILON = 1e-12;


// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log;


// MGF //

/**
* FUNCTION: mgf( t, lambda, k )
*	Evaluates the moment generating function (MGF) for a Weibull distribution with scale parameter `lambda` and shape parameter `k` at a value `x`.
*
* @param {Number} t - input value
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} evaluated MGF
*/
function mgf( t, lambda, k ) {
	var pws = 1,
		n = 0,
		sumln,
		c;
	if ( k < 1 ) {
		throw new RangeError( 'mgf()::invalid input argument. The MGF is only defined for `k >= 1`. Value: `' + k + '`.' );
	}
	if ( t === 0 ) {
		return 1;
	}
	sumln = ln( t ) + ln( lambda );
	do {
		n += 1;
		c = n*sumln - logFactorial( n ) + gamma.log( 1 + n/k );
		pws += exp( c );
	} while ( c/pws > EPSILON );

	return pws;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
