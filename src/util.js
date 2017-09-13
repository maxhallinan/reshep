export const branch = (predicate) => (left) => (right) => (...xs) =>
  (predicate(...xs)
    ? right(...xs)
    : left(...xs));

export const compose = (...fs) => {
  const gs = fs.reverse();

  return (x) => gs.reduce((y, f) => f(y), x);
};

export const deepMerge = (...srcs) => compose(
  reduce((targ, src) =>
    reduce((t, [ k, v, ]) => {
      t[k] = isObject(t[k]) && isObject(v) ? deepMerge(t[k], v) : v;

      return t;
    })(targ)(src)
  )({}),
  map(entries)
)(srcs);

export const entries = (src) => Object.keys(src)
  .map(key => ([ key, src[key], ]));

export const getPath = ([ key, ...path ], src) =>
  (path.length < 1
    ? src[key]
    : getPath(path, src[key]));

export const isObject = (x) => typeOf(x) === `object`;

export const map = (f) => (xs) => xs.map(f);

export const reduce = (f) => (init) => (xs) => xs.reduce(f, init);

export const set = (key, value, target) =>
  Object.assign({}, target, { [key]: value, });

export const setPath = ([ key, ...path ], value, target) => (
  path.length < 1
    ? set(key, value, target)
    : ({
      ...target,
      [key]: setPath(
        path,
        value,
        (target.hasOwnProperty(key) ? target[key] : {})),
    }));

export const split = (delimiter) => (s) => s.split(delimiter);

export const typeOf = (x)  =>
  ({}).toString
    .call(x)
    .match(/\s([a-z|A-Z]+)/)[1]
    .toLowerCase();

