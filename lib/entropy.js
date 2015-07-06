'use strict';

// VARIABLES //

var GAMMA = require( 'compute-const-eulergamma' );


// ENTROPY //

/**
* FUNCTION: entropy( lambda, k )
*	Returns the differential entropy of a Weibull distribution having scale parameter `lambda` and shape parameter `k`.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution entropy
*/
function entropy( lambda, k ) {
	return GAMMA*( 1 - 1/k ) + Math.log( lambda/k ) + 1;
} // end FUNCTION entropy()


// EXPORTS //

module.exports = entropy;
