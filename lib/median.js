'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// VARIABLES //

var LN2 = Math.log( 2 );


// FUNCTIONS //

var pow = Math.pow;


// MEDIAN //

/**
* FUNCTION: median( lambda, k )
*	Computes the distribution median.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution median
*/
function median( lambda, k ) {
	if ( !isPositive( lambda ) || !isPositive( k ) ) {
		throw new TypeError( 'median()::invalid input argument. Both arguments must be positive numbers. Values: `[' + lambda + ',' + k + ']`.' );
	}
	return lambda * pow( LN2, 1/k );
} // end FUNCTION median()


// EXPORTS //

module.exports = median;
