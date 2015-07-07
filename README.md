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

To create a [Weibull](https://en.wikipedia.org/wiki/Weibull_distribution) distribution,

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

A [`Weibull`](https://en.wikipedia.org/wiki/Weibull_distribution) distribution has the following properties...

<a name="weibull-name"></a>
#### name

Distribution name.

``` javascript
var name = dist.name;
// returns 'Weibull'
```

<a name="weibull-numparams"></a>
#### numparams

Number of distribution parameters.

``` javascript
var n = dist.numparams;
// returns 2
```

<a name="weibull-pnames"></a>
#### pnames

Parameter names.

``` javascript
var pnames = dist.pnames;
// returns ['lambda','k']
```

<a name="weibull-pdesc"></a>
#### pdesc

Distribution parameter descriptions.

``` javascript
var desc = dist.pdesc;
// returns {'lambda': '...', 'k': '...'}
```

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

A __read-only__ property returning the distribution [support](https://github.com/distributions-io/weibull-support).

``` javascript
var support = dist.support;
// returns [ 0, +infinity ]
```

<a name="weibull-mean" class="read-only-property"></a>
#### mean

A __read-only__ property returning the distribution [mean](https://github.com/distributions-io/weibull-mean).

``` javascript
var mean = dist.mean;
// returns <number>
```

<a name="weibull-variance" class="read-only-property"></a>
#### variance

A __read-only__ property returning the distribution [variance](https://github.com/distributions-io/weibull-variance).

``` javascript
var variance = dist.variance;
// returns <number>
```

<a name="weibull-median" class="read-only-property"></a>
#### median

A __read-only__ property returning the distribution [median](https://github.com/distributions-io/weibull-median).

``` javascript
var median = dist.median;
// returns <number>
```

<a name="weibull-skewness" class="read-only-property"></a>
#### skewness

A __read-only__ property returning the distribution [skewness](https://github.com/distributions-io/weibull-skewness).

[insert eqn (if applicable)]

``` javascript
var skewness = dist.skewness;
// returns <number>
```

<a name="weibull-ekurtosis" class="read-only-property"></a>
#### ekurtosis

A __read-only__ property returning the distribution [excess kurtosis](https://github.com/distributions-io/weibull-ekurtosis).

[insert eqn (if applicable)]

``` javascript
var excess = dist.ekurtosis;
// returns <number>
```

<a name="weibull-entropy" class="read-only-property"></a>
#### entropy

A __read-only__ property returning the distribution's [differential entropy](https://github.com/distributions-io/weibull-entropy).

[insert eqn (if applicable)]

``` javascript
var entropy = dist.entropy;
// returns <number>
``` 

---
## Methods

A [`Weibull`](https://en.wikipedia.org/wiki/Weibull_distribution) distribution has the following methods, each of which accepts the following `options`:

* 	__accessor__: accessor `function` for accessing `array` values.
* 	__dtype__: output [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix) data type. Default: `float64`.
*	__copy__: `boolean` indicating if the `function` should return a new data structure. Default: `true`.
*	__path__: [deepget](https://github.com/kgryte/utils-deep-get)/[deepset](https://github.com/kgryte/utils-deep-set) key path.
*	__sep__: [deepget](https://github.com/kgryte/utils-deep-get)/[deepset](https://github.com/kgryte/utils-deep-set) key path separator. Default: `'.'`.


#### dist.pdf( x[, options] )

Evaluates the [probability density function](https://github.com/distributions-io/weibull-pdf) (PDF). `x` may be either a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix).

[insert eqn]

``` javascript
var data = [ 0, 0.2, 0.5, 0.8 ];

var pdf = dist.pdf( data );
// returns [...]
```

#### dist.cdf( x[, options] )

Evaluates the [cumulative distribution function](https://github.com/distributions-io/weibull-cdf) (CDF). `x` may be either a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix).

[insert eqn]

``` javascript
var data = [ 0, 0.2, 0.5, 0.8 ];

var cdf = dist.cdf( data );
// returns [...]
```


#### dist.quantile( p[, options] )

Evaluates the inverse cumulative distribution ([quantile](https://github.com/distributions-io/weibull-quantile)) function. `p` may be either a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix).

[insert eqn]

``` javascript
var probs = [ 0.025, 0.5, 0.975 ];

var quantiles = dist.quantile( probs );
// returns [...]
```

__Note__: all probabilities `p` must exist on the interval `[0,1]`.


#### dist.mgf( t[, options] )

Evaluates the [moment generating function](https://github.com/distributions-io/weibull-mgf) (MGF). `t` may be either a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix).

[insert eqn]

``` javascript
(TODO)
```

__Note__: the [MGF](https://github.com/distributions-io/weibull-mgf) only exists for `k >= 1`.


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
