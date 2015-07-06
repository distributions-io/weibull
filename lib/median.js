'use strict';

// VARIABLES //

var LN2 = Math.log( 2 );


// MEDIAN //

/**
* FUNCTION: median( lambda, k )
*	Returns the median of a Weibull distribution having scale parameter `lambda` and shape parameter `k`.
*
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @returns {Number} distribution median
*/
function median( lambda, k ) {
	return lambda * Math.pow( LN2, 1/k );
} // end FUNCTION median()


// EXPORTS //

module.exports = median;
