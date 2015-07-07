'use strict';

// MODULES //

var deepSet = require( 'utils-deep-set' ).factory,
	deepGet = require( 'utils-deep-get' ).factory,
	partial = require( './partial.js' );


// MGF //

/**
* FUNCTION: mgf( arr, lambda, k, path[, sep] )
*	Evaluates the moment generating function (MGF) for a Weibull distribution with scale parameter `lambda` and shape parameter `k` for each array element and sets the input array.
*
* @param {Array} arr - input array
* @param {Number} lambda - scale parameter
* @param {Number} k - shape parameter
* @param {String} path - key path used when deep getting and setting
* @param {String} [sep] - key path separator
* @returns {Array} input array
*/
function mgf( x, lambda, k, path, sep ) {
	var len = x.length,
		opts = {},
		dget,
		dset,
		fcn,
		v, i;
	if ( arguments.length > 2 ) {
		opts.sep = sep;
	}
	if ( len ) {
		dget = deepGet( path, opts );
		dset = deepSet( path, opts );
		fcn = partial( lambda, k );
		for ( i = 0; i < len; i++ ) {
			v = dget( x[ i ] );
			if ( typeof v === 'number' ) {
				dset( x[i], fcn( v ) );
			} else {
				dset( x[i], NaN );
			}
		}
	}
	return x;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
