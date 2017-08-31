# reshep

[![Build Status](https://travis-ci.org/maxhallinan/reshep.svg?branch=master)](https://travis-ci.org/maxhallinan/reshep)
[![Coverage Status](https://coveralls.io/repos/github/maxhallinan/reshep/badge.svg)](https://coveralls.io/github/maxhallinan/reshep)

*Work in progress.*
A declarative props transformation utility.


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

### shapeFrom(shapeMap)

#### shapeMap

Type: `{ [fromPath]: toPath }`


### shapeWith(shapeMap)

#### shapeMap

Type: `{ [fromPath]: toPath }`


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)
