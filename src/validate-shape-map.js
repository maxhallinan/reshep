import { branch, isObject, typeOf, } from './util';

export const isValid = (input) => isObject(input);

const paramName = `\`pathMap\``;

export const handleInvalid = (input) => {
  throw new TypeError(
    `Expected ${paramName} to be an object. ` +
    `${paramName} is type ${typeOf(input)} instead.`);
};

export default branch(isValid)(handleInvalid);

