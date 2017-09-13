import {
  compose,
  entries,
  getPath,
  map,
  reduce,
  setPath,
  split,
} from './util';

const splitPath = split(`.`);

const splitPaths = map(splitPath);

const getValue = (src) => ([ from, to, ]) => ([ to, getPath(from, src), ]);

const setValue = (targ, [ to, val, ]) => setPath(to, val, targ);

const mapShape = (shapeMap) => {
  const paths = entries(shapeMap);

  return (props) => compose(
    reduce(setValue)({}),
    map(getValue(props)),
    map(splitPaths))(paths);
};

export default mapShape;
