export const path = ([k, ...props], src) => (
  props.length < 1
  ? src[k]
  : path(props, src[k]));

