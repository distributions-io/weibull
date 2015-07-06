Weibull
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Weibull](https://en.wikipedia.org/wiki/Weibull_distribution) distribution.

[insert description]


## Installation

``` bash
$ npm install distributions-weibull
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var weibull = require( 'distributions-weibull' );
```

<a name="weibull"></a>
#### weibull( [options] )

To create a [Weibull]() distribution,

``` javascript
var dist = weibull();
```

The function accepts the following `options`:

*	__lambda__: [scale]() parameter. Default: `1`.
*	__k__: [shape]() parameter. Default: `1`.

To specify a [scale]() parameter, set the `lambda` option.

``` javascript
var dist = weibull({
	'lambda': 2
});
```

To specify a [shape]() parameter, set the `k` option.

``` javascript
var dist = weibull({
	'k': 5
});
```

---
## Properties

A [`Weibull`]() distribution has the following properties...

<a name="weibull-lambda" class="scale"></a>
#### lambda

[Scale]() parameter.

``` javascript
// Get:
var lambda = dist.lambda;
// returns <number>

// Set:
dist.lambda = 0.5;
```

<a name="weibull-k" class="shape"></a>
#### k

[Shape]() parameter.

``` javascript
// Get:
var k = dist.k;
// returns <number>

// Set:
dist.k = 3;
```

<a name="weibull-support" class="read-only-property"></a>
#### support

A __read-only__ property returning the distribution [support]().

``` javascript
var support = dist.support;
// returns [ 0, +infinity ]
```

<a name="weibull-mean" class="read-only-property"></a>
#### mean

A __read-only__ property returning the distribution [mean]().

``` javascript
var mean = dist.mean;
// returns <number>
```

<a name="weibull-variance" class="read-only-property"></a>
#### variance

A __read-only__ property returning the distribution [variance]().

``` javascript
var variance = dist.variance;
// returns <number>
```

<a name="weibull-median" class="read-only-property"></a>
#### median

A __read-only__ property returning the distribution [median]().

``` javascript
var median = dist.median;
// returns <number>
```

<a name="weibull-skewness" class="read-only-property"></a>
#### skewness

A __read-only__ property returning the distribution [skewness]().

[insert eqn (if applicable)]

``` javascript
var skewness = dist.skewness;
// returns <number>
```

<a name="weibull-ekurtosis" class="read-only-property"></a>
#### ekurtosis

A __read-only__ property returning the distribution [excess kurtosis]().

[insert eqn (if applicable)]

``` javascript
var excess = dist.ekurtosis;
// returns <number>
```

<a name="weibull-entropy" class="read-only-property"></a>
#### entropy

A __read-only__ property returning the distribution's [differential entropy](http://en.wikipedia.org/wiki/Differential_entropy).

[insert eqn (if applicable)]

``` javascript
var entropy = dist.entropy;
// returns <number>
``` 

---
## Methods

A `Weibull` distribution has the following methods...


#### dist.pdf( [x] )

If no argument is provided, returns the probability density function (PDF). If a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix) is provided, evaluates the PDF for each element.

[insert eqn]

``` javascript
var data = [ 0, 0.2, 0.5, 0.8 ];

var pdf = dist.pdf( data );
// returns [...]
```

#### dist.cdf( [x] )

If no argument is provided, returns the cumulative distribution function (CDF). If a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix) is provided, evaluates the CDF for each element.

[insert eqn]

``` javascript
var data = [ 0, 0.2, 0.5, 0.8 ];

var cdf = dist.cdf( data );
// returns [...]
```


#### dist.quantile( [p] )

If no argument is provided, returns the inverse cumulative distribution (quantile) function. If a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix) is provided, evaluates the quantile function for each element.

[insert eqn]

``` javascript
var probs = [ 0.025, 0.5, 0.975 ];

var quantiles = dist.quantile( probs );
// returns [...]
```

__Note__: all values must exist on the interval `[0,1]`; otherwise, the evaluated value is `NaN`.


#### dist.mgf( [t] )

If no argument is provided, returns the distribution's moment generating function (MGF). If a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix) is provided, evaluates the MGF for each input element.

[insert eqn]

``` javascript
(TODO)
```


---
## Examples

``` javascript
var weibull = require( 'distributions-weibull' );

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
var dist = weibull({
	'lambda': lambda,
	'k': k
});

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

---
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

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.

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
