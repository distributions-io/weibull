'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// VARIABLES //

var GAMMA = require( 'compute-const-eulergamma' );


// FUNCTIONS //

var ln = Math.log;


// ENTROPY //

/**
* FUNCTION: entropy( lambda, k )
*	Computes the distribution differential entropy.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution entropy
*/
function entropy( lambda, k ) {
	if ( !isPositive( lambda ) || !isPositive( k ) ) {
		throw new TypeError( 'entropy()::invalid input argument. Both arguments must be positive numbers. Values: `[' + lambda + ',' + k + ']`.' );
	}
	return GAMMA*( 1 - 1/k ) + ln( lambda/k ) + 1;
} // end FUNCTION entropy()


// EXPORTS //

module.exports = entropy;
