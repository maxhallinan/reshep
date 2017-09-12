import createElement from './create-element';

const createFactory = (type) => (props, children) =>
  createElement(type, props, children);

export createFactory;
