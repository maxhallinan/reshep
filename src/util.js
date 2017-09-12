export const branch = (predicate) => (left) => (right) => (...xs) =>
  (predicate(...xs)
    ? right(...xs)
    : left(...xs));

export const compose = (f) => (g) => (x) => f(g(x));

export const entries = (src) => Object.keys(src)
  .map(key => ([ k, src[k], ]));

export const getPath = ([k, ...props], src) => (
  props.length < 1
  ? src[k]
  : path(props, src[k]));

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
          (target.hasOwnProperty(key) ? target[key] : {}))
      }));

export const split = (delimiter) => (s) => s.split(delimiter);

export const typeOf = (x)  =>
  ({}).toString
  .call(x)
  .match(/\s([a-z|A-Z]+)/)[1]
  .toLowerCase();

