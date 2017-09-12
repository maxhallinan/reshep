export const branch = (predicate) => (left) => (right) => (...xs) =>
  (predicate(...xs)
    ? right(...xs)
    : left(...xs));

export const path = ([k, ...props], src) => (
  props.length < 1
  ? src[k]
  : path(props, src[k]));

export const isObject = x => typeOf(x) === `object`;

export const typeOf = x  =>
  ({}).toString
  .call(x)
  .match(/\s([a-z|A-Z]+)/)[1]
  .toLowerCase();

