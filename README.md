# Synopsis

**par** is a JavaScript implementation of partial function application (sometimes incorrectly called "currying").

# Install

## Node.js

### With NPM

```sh
npm install par
```

### From source

```sh
git clone https://github.com/pluma/par.git
cd par
npm install
make && make dist
```

## Browser

### With component

```sh
component install pluma/par
```

[Learn more about component](https://github.com/component/component).

### With bower

```sh
bower install par
```

[Learn more about bower](https://github.com/twitter/bower).

### With a CommonJS module loader

Download the [latest minified CommonJS release](https://raw.github.com/pluma/par/master/dist/par.min.js) and add it to your project.

[Learn more about CommonJS modules](http://wiki.commonjs.org/wiki/Modules/1.1).

### With an AMD module loader

Download the [latest minified AMD release](https://raw.github.com/pluma/par/master/dist/par.amd.min.js) and add it to your project.

[Learn more about AMD modules](http://requirejs.org/docs/whyamd.html).

### As a standalone library

Download the [latest minified standalone release](https://raw.github.com/pluma/par/master/dist/par.globals.min.js) and add it to your project.

```html
<script src="/your/js/path/par.globals.min.js"></script>
```

This makes the `par` module available in the global namespace.

# Basic usage example

```javascript
var par = require('par');

function divideBy(x, y) {
	return x / y;
}

var divide4By = par.lpartial(divideBy, 4);
console.log(divide4By(10)); // 0.4

var divideBy4 = par.rpartial(divideBy, 4);
console.log(divideBy4(10)); // 2.5
```

# API

## lpartial(fn, args…):Function

Creates a partially applied function that will append the initial arguments to the left-hand side of the argument list.

## rpartial(fn, args…):Function

Creates a partially applied function that will append the initial arguments to the right-hand side of the argument list.

## partial(fn, args…):Function

Alias for `lpartial`.

# License

The MIT/Expat license.
