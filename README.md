Weibull
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Weibull distribution.


## Installation

``` bash
$ npm install distributions-weibull
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var createDist = require( 'distributions-weibull' );
```

To create a Weibull distribution,

``` javascript
var dist = createDist();
```

The constructor function takes two input arguments, `lambda` and `k`, the shape and scale parameters of the Weibull distribution. By default, a distribution with `lambda = 1` and `k = 1` is created.

The distribution is configurable and has the following methods...


#### dist.support()

Returns the distribution support, which is all numbers in the interval `(0,∞)`.

``` javascript
var support = dist.support();
// returns [ 0,+Infinity ]
```


#### dist.lambda( [value] )

This method is a setter/getter. If no `value` is provided, returns the shape parameter `lambda`. To set `lambda`,

``` javascript
dist.lambda( 10 );
```

The default shape parameter is 1.

#### dist.k( [value] )

This method is a setter/getter. If no `value` is provided, returns the scale parameter `k`. To set `k`,

``` javascript
dist.k( 100 );
```

The default scale parameter is 1.

#### dist.mean()

Returns the distribution `mean`.

``` javascript
var mean = dist.mean();
```


#### dist.variance()

Returns the distribution `variance`.

``` javascript
var variance = dist.variance();
```


#### dist.median()

Returns the distribution `median`.

``` javascript
var median = dist.median();
```

#### dist.skewness()

Returns the distribution `skewness`.

``` javascript
var skewness = dist.skewness();
```

#### dist.ekurtosis()

Returns the distribution `excess kurtosis`.

``` javascript
var excess = dist.ekurtosis();
```

#### dist.entropy()

Returns the distribution's [differential entropy](http://en.wikipedia.org/wiki/Differential_entropy).

``` javascript
var entropy = dist.entropy();
```

#### dist.pdf( [x] )

If no argument is provided, returns the probability density function (PDF). If a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix) is provided, evaluates the PDF for each element.

``` javascript
var data = [ 0, 0.2, 0.5, 0.8 ];

var pdf = dist.pdf( data );
// returns [...]
```

#### dist.cdf( [x] )

If no argument is provided, returns the cumulative distribution function (CDF). If a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix) is provided, evaluates the CDF for each element.


``` javascript
var data = [ 0, 0.2, 0.5, 0.8 ];

var cdf = dist.cdf( data );
// returns [...]
```


#### dist.quantile( [p] )

If no argument is provided, returns the inverse cumulative distribution (quantile) function. If a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix) of probabilities is provided, evaluates the quantile function for each element.

``` javascript
var probs = [ 0.025, 0.5, 0.975 ];

var quantiles = dist.quantile( probs );
// returns [...]
```

Note: all values must exist on the interval `[0, 1]`. The function returns `NaN` for a value not satisfying this condition.

#### dist.mgf( [t] )

If no argument is provided, returns the moment generating function (MGF) of the distribution. If a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix) is provided, evaluates the MGF for each input element.


## Examples

``` javascript
var createDist = require( 'distributions-weibull' );

// Define the distribution parameters...
var lambda = 10,
	k = 20;

// Create a vector...
var vec = new Array( 1000 ),
	len = vec.length;

for ( var i = 0; i < len; i++ ) {
	vec[ i ] = lambda * Math.pow( -Math.log( 1 - Math.random() ) , 1/k );
}

// Create a Weibull distribution and configure...
var dist = createDist( lambda, k );

// Evaluate the probability density function over the vector...
var pdf = dist.pdf( vec );

var arr = new Array( 100 );
for ( var j = 0; j < arr.length; j++ ) {
	arr[ j ] = [ vec[j], pdf[j] ];
}
console.log( arr );

// Evaluate the quantile function for canonical cumulative probability values...
var quantiles = dist.quantile( [ 0.025, 0.5, 0.975 ] );

console.log( quantiles );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Distributions.io](https://github.com/distributions-io) Authors.

[npm-image]: http://img.shields.io/npm/v/distributions-weibull.svg
[npm-url]: https://npmjs.org/package/distributions-weibull

[travis-image]: http://img.shields.io/travis/distributions-io/weibull/master.svg
[travis-url]: https://travis-ci.org/distributions-io/weibull

[coveralls-image]: https://img.shields.io/coveralls/distributions-io/weibull/master.svg
[coveralls-url]: https://coveralls.io/r/distributions-io/weibull?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/weibull.svg
[dependencies-url]: https://david-dm.org/distributions-io/weibull

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/weibull.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/weibull

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/weibull.svg
[github-issues-url]: https://github.com/distributions-io/weibull/issues
