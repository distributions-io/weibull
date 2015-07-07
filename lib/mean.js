'use strict';

// MODULES //

var gamma = require( 'gamma' ),
	isPositive = require( 'validate.io-positive-primitive' );


// MEAN //

/**
* FUNCTION: mean( lambda, k )
*	Computes the distribution mean.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution mean
*/
function mean( lambda, k ) {
	if ( !isPositive( lambda ) || !isPositive( k ) ) {
		throw new TypeError( 'mean()::invalid input argument. Both arguments must be positive numbers. Values: `[' + lambda + ',' + k + ']`.' );
	}
	return lambda * gamma( 1 + 1/k );
} // end FUNCTION mean()


// EXPORTS //

module.exports = mean;
