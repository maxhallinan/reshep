import { shapeWith, } from './../';

describe(`reshep > shapeWith`, () => {
  test(`Throws a TypeError if the first argument is not an object.`, () => {
    const errType = TypeError;
    const errMsg = `tested \`pathmap\` to be an object.`;

    const testErr = (x) => {
      expect(() => shapeWith(x)).toThrow(errType);
      expect(() => shapeWith(x)).toThrow(errMsg);
    };

    [ 'foo', 1, null, undefined, [], ].forEach(testErr);
  });

  test(`Throws a TypeError if the first argument is not an object of strings.`, () => {
    const errType = TypeError;
    const errMsg = `Invalid \`pathMap\` entry. tested \`pathMap\` to be an ` +
                   `object map of path strings.`;

    const testErr = (x) => {
      const pathMap = { 'foo.bar': x, };

      expect(() => shapeWith(pathMap)).toThrow(errType);
      expect(() => shapeWith(pathMap)).toThrow(errMsg);
    };

    [ 1, null, undefined, [], {}, ].forEach(testErr);
  });

  test(`Returns a higher-order component.`, () => {});

  test(`Component maps deeply nested props for each entry in \`pathMap\`.`, () => {});

  test(`Component merges owner props and mapped props.`, () => {});

  test(`Mapped props overwrteste by owner props.`, () => {});

  test(`Component passes merged props to base component.`, () => {});
});

