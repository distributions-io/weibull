'use strict';

// MODULES //

var isArrayLike = require( 'validate.io-array-like' ),
	isMatrixLike = require( 'validate.io-matrix-like' ),
	isNumber = require( 'validate.io-number-primitive' ),
	isPositive = require( 'validate.io-positive' ),
	matrix = require( 'dstructs-matrix' ),
	gamma = require( 'gamma' );


// FUNCTIONS //

var getPDF = require( './pdf.js' ),
	getCDF = require( './cdf.js' ),
	getQuantileFunction = require( './quantile.js' ),
	getMGF = require( './mgf.js' );


// VARIABLES

// Euler-Mascheroni constant
var GAMMA = 0.57721566490153286060651209008240243104215933593992;

// DISTRIBUTION //

/**
* FUNCTION: Distribution( lambda, k )
*	Distribution constructor.
*
* @constructor
* @param {Number} [lambda] - shape parameter
* @param {Number} [k] - scale prameter
* @returns {Distribution} Distribution instance
*/
function Distribution( lambda, k ) {
	if ( lambda !== undefined && k !== undefined ) {
		if ( !isPositive( lambda ) ) {
			throw new TypeError( 'constructor()::invalid input argument. Shape parameter `lambda` must be a positive number. Value: `' + lambda + '`' );
		}
		if ( !isPositive( k ) ) {
			throw new TypeError( 'constructor()::invalid input argument. Scale parameter `k` must be a positive number. Value: `' + k + '`' );
		}
	}

	this._lambda = lambda || 1 ; // shape
	this._k = k || 1; // scale
	return this;
} // end FUNCTION Distribution()

/**
* METHOD: support()
*	Returns the distribution support.
*
* @returns {Array} distribution support
*/
Distribution.prototype.support = function() {
	return [ 0, +Infinity ];
}; // end METHOD support()

/**
* METHOD: lambda( [value] )
*	`lambda` setter and getter. If a value is provided, sets the shape parameter. If no value is provided, returns it.
*
* @param {Number} [value] - shape parameter
* @returns {Distribution|Number} Distribution instance or `lambda` parameter
*/
Distribution.prototype.lambda = function( value ) {
	if ( !arguments.length ) {
		return this._lambda;
	}
	if ( !isPositive( value ) ) {
		throw new TypeError( 'lambda()::invalid input argument. Shape parameter `lambda` must be a positive number. Value: `' + value + '`' );
	}
	this._lambda = value;
	return this;
}; // end METHOD lambda()

/**
* METHOD: k( [value] )
*	`k` setter and getter. If a value is provided, sets the scale parameter. If no value is provided, returns it.
*
* @param {Number} [value] - scale parameter
* @returns {Distribution|Number} Distribution instance or `k` parameter
*/
Distribution.prototype.k = function( value ) {
	if ( !arguments.length ) {
		return this._k;
	}
	if ( !isPositive( value ) ) {
		throw new TypeError( 'k()::invalid input argument. Scale parameter `k` must be a positive number. Value: `' + value + '`' );
	}
	this._k = value;
	return this;
}; // end METHOD k()

/**
* METHOD: mean()
*	Returns the distribution mean.
*
* @returns {Number} mean value
*/
Distribution.prototype.mean = function() {
	var k = this._k;
	return this._lambda * gamma( 1 + 1/k );
}; // end METHOD mean()

/**
* METHOD: variance()
*	Returns the distribution variance.
*
* @returns {Number} variance
*/
Distribution.prototype.variance = function() {
	var lambda = this._lambda,
		k = this._k;
	return Math.pow( lambda, 2 ) * ( gamma( 1 + 2/k ) - Math.pow( gamma( 1 + 1/k), 2 ) );
}; // end METHOD variance()

/**
* METHOD: median()
*	Returns the distribution median.
*
* @returns {Number} median
*/
Distribution.prototype.median = function() {
	var lambda = this._lambda,
		k = this._k;
	return lambda * Math.pow( Math.log( 2 ), 1/k );
}; // end METHOD median()

/**
* METHOD: skewness()
*	Returns the distribution skewness.
*
* @returns {Number} skewness
*/
Distribution.prototype.skewness = function() {
	var lambda = this._lambda,
		k = this._k,
		mu = this.mean(),
		sigma = Math.sqrt( this.variance() ),
		num, denom;

	num = gamma( 1 + 3/k ) * Math.pow( lambda, 3 ) - 3 * mu * Math.pow( sigma, 2 ) - Math.pow( mu, 3 );
	denom = Math.pow( sigma, 3 );
	return num / denom;
}; // end METHOD skewness()

/**
* METHOD: ekurtosis()
*	Returns the distribution excess kurtosis.
*
* @returns {Number} excess kurtosis
*/
Distribution.prototype.ekurtosis = function() {
	var lambda = this._lambda,
		k = this._k,
		mu = this.mean(),
		sigma_squared = this.variance(),
		sigma = Math.sqrt( sigma_squared ),
		sigma_cubed = Math.pow( sigma, 3 ),
		skewness = this.skewness(),
		num, denom;

	num = Math.pow( lambda, 4 ) * gamma( 1 + 4/k );
	num -= 4 * skewness * sigma_cubed * mu;
	num -= 6 * Math.pow( mu, 2 ) * sigma_squared;
	num -= Math.pow( mu, 4 );

	denom = Math.pow( sigma_squared, 2 );

	return num / denom;
}; // end METHOD ekurtosis()

/**
* METHOD: entropy()
*	Returns the entropy.
*
* @returns {Number} entropy
*/
Distribution.prototype.entropy = function() {
	var lambda = this._lambda,
		k = this._k;
	return GAMMA * ( 1 - 1/k ) + Math.log( lambda/k ) + 1;
}; // end METHOD entropy()

/**
* METHOD: pdf( [x] )
*	If provided an input `x`, evaluates the distribution PDF for each element. If no input argument is provided, returns the PDF.
*
* @param {Number|Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} [x] - input values
* @returns {Function|Array|Matrix|Number} distribution PDF or evaluated PDF
*/
Distribution.prototype.pdf = function( x ) {
	var pdf, len, out, val, i;

	pdf = getPDF( this._lambda, this._k );

	if ( !arguments.length ) {
		return pdf;
	}
	if ( isNumber( x ) ) {
		return pdf ( x );
	}
	if ( isMatrixLike( x ) ) {
		len = x.length;
		// Create an output matrix:
		out = matrix( new Float64Array( len ), x.shape );
		for ( i = 0; i < len; i++ ) {
			out.data[ i ] = pdf( x.data[ i ] );
		}
		return out;
	}
	if ( isArrayLike( x ) ) {
		len = x.length;
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			val = x[ i ];
			if ( !isNumber( val ) ) {
				return NaN;
			} else {
				out[ i ] = pdf( val );
			}
		}
		return out;
	}
	return NaN;
}; // end METHOD pdf()

/**
* METHOD: cdf( [x] )
*	If provided an input `x`, evaluates the distribution CDF for each element. If no input argument is provided, returns the CDF.
*
* @param {Number|Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} [x] - input values
* @returns {Function|Array|Matrix|Number} distribution CDF or evaluated CDF
*/
Distribution.prototype.cdf = function( x ) {
	var cdf, len, out, val, i;

	cdf = getCDF( this._lambda, this._k );

	if ( !arguments.length ) {
		return cdf;
	}
	if ( isNumber( x ) ) {
		return cdf( x );
	}
	if ( isMatrixLike( x ) ) {
		len = x.length;
		// Create an output matrix:
		out = matrix( new Float64Array( len ), x.shape );
		for ( i = 0; i < len; i++ ) {
			out.data[ i ] = cdf( x.data[ i ] );
		}
		return out;
	}
	if ( isArrayLike( x ) ) {
		len = x.length;
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			val = x[ i ];
			if ( !isNumber( val ) ) {
				return NaN;
			} else {
				out[ i ] = cdf( val );
			}
		}
		return out;
	}
	return NaN;
}; // end METHOD cdf()

/**
* METHOD: quantile( [p] )
*	If provided an input `p`, evaluates the distribution quantile function for each element. If no input argument is provided, returns the quantile function.
*
* @param {Number|Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} [p] - input values
* @returns {Function|Array|Matrix|Number} distribution quantile function or evaluated quantile function
*/
Distribution.prototype.quantile = function( p ) {
	var q, len, out, val, i;

	q = getQuantileFunction( this._lambda, this._k );

	if ( !arguments.length ) {
		return q;
	}
	if ( isNumber( p ) ) {
		return q( p );
	}
	if ( isMatrixLike( p ) ) {
		len = p.length;
		// Create an output matrix:
		out = matrix( new Float64Array( len ), p.shape );
		for ( i = 0; i < len; i++ ) {
			out.data[ i ] = q( p.data[ i ] );
		}
		return out;
	}
	if ( isArrayLike( p ) ) {
		len = p.length;
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			val = p[ i ];
			if ( !isNumber( val ) ) {
				return NaN;
			} else {
				out[ i ] = q( val );
			}
		}
		return out;
	}
	return NaN;
}; // end METHOD quantile()

/**
* METHOD: mgf( [t] )
*	If provided an input `t`, evaluates the moment generating function for each element. If no input argument is provided, returns the moment generating function.
*
* @param {Number|Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} [t] - input values
* @returns {Function|Array|Matrix|Number} moment generating function or evaluated moment generating function
*/
Distribution.prototype.mgf = function( t ) {
	var m, len, out, val, i;

	m = getMGF( this._lambda, this._k );

	if ( !arguments.length ) {
		return m;
	}
	if ( isNumber( t ) ) {
		return m( t );
	}
	if ( isMatrixLike( t ) ) {
		len = t.length;
		// Create an output matrix:
		out = matrix( new Float64Array( len ), t.shape );
		for ( i = 0; i < len; i++ ) {
			out.data[ i ] = m( t.data[ i ] );
		}
		return out;
	}
	if ( isArrayLike( t ) ) {
		len = t.length;
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			val = t[ i ];
			if ( !isNumber( val ) ) {
				return NaN;
			} else {
				out[ i ] = m( val );
			}
		}
		return out;
	}
	return NaN;
}; // end METHOD mgf()


// EXPORTS //

module.exports = function createDistribution( lambda, k ) {
	return new Distribution( lambda, k );
};
