# reshep

[![Build Status](https://travis-ci.org/maxhallinan/reshep.svg?branch=master)](https://travis-ci.org/maxhallinan/reshep)
[![Coverage Status](https://coveralls.io/repos/github/maxhallinan/reshep/badge.svg)](https://coveralls.io/github/maxhallinan/reshep)

*Work in progress*

Pick deeply nested React component props from a map of path strings.

An alternative to map functions when only simple mapping is desired.


## Install

```
$ npm install --save reshep
```


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


## API

### shapeFrom(pathMap)

Takes a map of path strings and returns a higher-order component. The
higher-order component picks values from the parent props and sets them on a
new props object passed to the base component.

#### pathMap

Type: `{ [string]: string }`

An object map of path strings. The key is a path to pick from the
parent props and the value is a path to set on the base component props.

### shapeWith(pathMap)

Like `shapeFrom`, except the new props are merged with
the parent props.

#### pathMap

The same as the `pathMap` argument to `shapeFrom`.


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)
