'use strict';

// MODULES

var gamma = require( 'gamma' );


// VARIABLES //

var EPSILON = 1e-12,
	FACTORIALS = require( './factorials.json' );

// REFERENCE: http://www.johndcook.com/blog/csharp_log_factorial/
function logFactorial( n ) {
	if ( n < 0 ) {
		return NaN;
	}
	if ( n <= 256 ) {
		return FACTORIALS[ n ];
	} else {
		var x = n + 1;
		return (x - 0.5) * Math.log(x) - x + 0.5 * Math.log( 2 * Math.PI ) + 1 / ( 12 * x );
	}
}

/**
* FUNCTION: getMGF( a, b )
*	Returns a moment generating function for a uniform distribution with with parameters `lambda` and `k`.
*
* @private
* @param {Number} lambda - shape parameter
* @param {Number} k - scale prameter
* @returns {Function} moment generating function (MGF)
*/
function getMGF( lambda, k ) {
	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment generating function at input value `t`.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	if ( k < 1 ) {
		throw new RangeError( 'getMGF()::invalid input argument. The MGF only exists for k >= 1 . Value: `' + k + '`' );
	}
	return function mgf( t ) {
		var pws = 1,
			n = 0,
			c;
 		if ( t !== 0) {
			do {
				n += 1;
				c = n * Math.log( t ) + n * Math.log( lambda ) - logFactorial( n ) + gamma.log( 1 + n/k );
				pws += Math.exp( c );
			} while ( c / pws > EPSILON );
			return pws;
		} else {
			return 1;
		}
	};
} // end FUNCTION getMGF()


// EXPORTS //

module.exports = getMGF;
