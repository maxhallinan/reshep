# reshep

[![Build Status](https://travis-ci.org/maxhallinan/reshep.svg?branch=master)](https://travis-ci.org/maxhallinan/reshep)
[![Coverage Status](https://coveralls.io/repos/github/maxhallinan/reshep/badge.svg)](https://coveralls.io/github/maxhallinan/reshep)

*Work in progress*

Pick deeply nested React component props by map of path strings.

A map function alternative when only simple mapping is desired.


<span id="install"></span>
## Install

```
$ npm install --save reshep
```


<span id="usage"></span>
## Usage

```javascript
import { shapeFrom, } from 'reshep';

const enhance = shapeFrom({
  'match.params.fooId': 'fooId'
});

const Foo = enhance(({ fooId, }) => (/*...*/));
```

```javascript
import { shapeWith, } from 'reshep';

const enhance = shapeWith({
  'match.params.fooId': 'fooId'
});

const Foo = enhance(({ fooId, match, }) => (/*...*/));
```


<span id="api"></span>
## API

<span id="shape-from"></span>
### shapeFrom(pathMap)

Takes a map of path strings and returns a higher-order component. The
higher-order component picks values from the parent props and sets them on a
new props object passed to the base component.

<span id="shape-from-path-map"></span>
#### pathMap

Type: `{ [string]: string }`

An object map of path strings. The key is a path to pick from the
parent props and the value is a path to set on the base component props.

<span id="shape-with"></span>
### shapeWith(pathMap)

Like [`shapeFrom`](#shape-from), except the new props are merged with
the parent props.

<span id="shape-with-path-map"></span>
#### pathMap

The same as the [`pathMap`](#shape-from-path-map) argument to `shapeFrom`.


<span id="license"></span>
## License

MIT © [Max Hallinan](https://github.com/maxhallinan)
