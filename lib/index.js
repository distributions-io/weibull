'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isPositive = require( 'validate.io-positive-primitive' ),
	pnames = require( './pnames.js' ),
	pdesc = require( './pdesc.js' ),
	support = require( './support.js' ),
	mean = require( './mean.js' ),
	variance = require( './variance.js' ),
	median = require( './median.js' ),
	skewness = require( './skewness.js' ),
	ekurtosis = require( './ekurtosis.js' ),
	entropy = require( './entropy.js' );


// WEIBULL DISTRIBUTION //

/**
* FUNCTION: Weibull( [options] )
*	Weibull distribution constructor.
*
* @constructor
* @param {Object} [options] - constructor options
* @param {Number} [options.lambda=1] - scale parameter
* @param {Number} [options.k=1] - shape parameter
* @returns {Weibull} Weibull instance
*/
function Weibull( opts ) {
	var lambda = 1,
		k = 1;

	if ( !( this instanceof Weibull ) ) {
		if ( arguments.length ) {
			return new Weibull( opts );
		}
		return new Weibull();
	}
	if ( arguments.length ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'Weibull()::invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
		if ( opts.hasOwnProperty( 'lambda' ) ) {
			lambda = opts.lambda;
			if ( !isPositive( lambda ) ) {
				throw new TypeError( 'Weibull()::invalid option. Scale parameter `lambda` must be a positive number. Option: `' + lambda + '`' );
			}
		}
		if ( opts.hasOwnProperty( 'k' ) ) {
			k = opts.k;
			if ( !isPositive( k ) ) {
				throw new TypeError( 'Weibull()::invalid option. Shape parameter `k` must be a positive number. Option: `' + k + '`' );
			}
		}
	}
	// Name:
	Object.defineProperty( this, 'name', {
		'value': 'Weibull',
		'configurable': false,
		'enumerable': true,
		'writable': false
	});

	// Number of parameters:
	Object.defineProperty( this, 'numparams', {
		'value': 2,
		'configurable': false,
		'enumerable': true,
		'writable': false
	});

	// Parameter names:
	Object.defineProperty( this, 'pnames', {
		'configurable': false,
		'enumerable': true,
		'get': pnames
	});

	// Parameter descriptions:
	Object.defineProperty( this, 'pdesc', {
		'configurable': false,
		'enumerable': true,
		'get': pdesc
	});

	// Scale:
	Object.defineProperty( this, 'lambda', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return lambda;
		},
		'set': function set( val ) {
			if ( !isPositive( val ) ) {
				throw new TypeError( 'lambda::invalid assignment. Scale parameter must be a positive number. Value: `' + val + '`.' );
			}
			lambda = val;
			return val;
		}
	});

	// Shape:
	Object.defineProperty( this, 'k', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return k;
		},
		'set': function set( val ) {
			if ( !isPositive( val ) ) {
				throw new TypeError( 'k::invalid assignment. Shape parameter must be a positive number. Value: `' + val + '`.' );
			}
			k = val;
			return val;
		}
	});

	// Support:
	Object.defineProperty( this, 'support', {
		'configurable': false,
		'enumerable': true,
		'get': support
	});

	// Mean:
	Object.defineProperty( this, 'mean', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return mean( lambda, k );
		}
	});

	// Variance:
	Object.defineProperty( this, 'variance', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return variance( lambda, k );
		}
	});

	// Median:
	Object.defineProperty( this, 'median', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return median( lambda, k );
		}
	});

	// Skewness:
	Object.defineProperty( this, 'skewness', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return skewness( lambda, k );
		}
	});

	// Excess kurtosis:
	Object.defineProperty( this, 'ekurtosis', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return ekurtosis( lambda, k );
		}
	});

	// Entropy:
	Object.defineProperty( this, 'entropy', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return entropy( lambda, k );
		}
	});

	return this;
} // end FUNCTION Weibull()


// METHODS //

Weibull.prototype.pdf = require( './pdf.js' );

Weibull.prototype.cdf = require( './cdf.js' );

Weibull.prototype.quantile = require( './quantile.js' );

Weibull.prototype.mgf = require( './mgf.js' );


// EXPORTS //

module.exports = Weibull;
