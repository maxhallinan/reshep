# reshep

[![Build Status](https://travis-ci.org/maxhallinan/reshep.svg?branch=master)](https://travis-ci.org/maxhallinan/reshep)
[![Coverage Status](https://coveralls.io/repos/github/maxhallinan/reshep/badge.svg)](https://coveralls.io/github/maxhallinan/reshep)

A higher-order component that "reshapes" a React component props object according
to a map of from/to path strings.

An alternative to a map function when no value transformation is required.


## Install

```
$ npm install --save reshep
```


## Usage

```javascript
import assert from 'assert';
import { shapeFrom, } from 'reshep';

const enhance = shapeFrom({
  'history.push': 'changeRoute',
  'match.params.foo': 'foo',
});

const Foo = enhance(({ changeRoute, foo, }) => {
  assert.ok(changeRoute);

  assert.ok(foo);

  /* ... */
});
```

```javascript
import assert from 'assert';
import { shapeWith, } from 'reshep';

const enhance = shapeWith({
  'match.params.foo': 'foo',
});

const Foo = enhance(({ match, foo, }) => {
  assert.ok(foo);

  // parent props are merged with new props
  assert.ok(match.params.foo);

  /* ... */
});
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

Like `shapeFrom`, except the new props are deeply merged with
the parent props.

#### pathMap

The same as the `pathMap` argument to `shapeFrom`.


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)
