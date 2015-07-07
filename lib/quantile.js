'use strict';

// MODULES //

var QUANTILE = require( './quantile' );


/**
* FUNCTION: quantile( x[, opts] )
*	Evaluates the distribution's quantile function.
*
* @param {Number|Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} x - input value
* @param {Object} [opts] - function options
* @param {Boolean} [opts.copy=true] - boolean indicating if the function should return a new data structure
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @param {String} [opts.path] - deep get/set key path
* @param {String} [opts.sep="."] - deep get/set key path separator
* @param {String} [opts.dtype="float64"] - output data type
* @returns {Number|Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} evaluated quantile function
*/
function quantile( x, options ) {
	/* jshint validthis:true */
	var opts;
	if ( arguments.length > 1 ) {
		opts = options;
	} else {
		opts = {};
	}
	opts.lambda = this.lambda;
	opts.k = this.k;
	return QUANTILE( x, opts );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
