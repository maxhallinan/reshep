import { shapeFrom, } from './../';

describe(`reshep > shapeFrom`, () => {
  test(`To throw a TypeError if pathMap is not an object.`, () => {
    const errType = TypeError;
    const errMsg = `tested \`pathmap\` to be an object.`;

    const testErr = (x) => {
      expect(() => shapeFrom(x)).toThrow(errType);
      expect(() => shapeFrom(x)).toThrow(errMsg);
    };

    [ 'foo', 1, null, undefined, [], ].forEach(testErr);
  });

  test(`To throw a TypeError if the first argument is not an object of strings.`, () => {
    const errType = TypeError;
    const errMsg = `Invalid \`pathMap\` entry. tested \`pathMap\` to be an ` +
                   `object map of path strings.`;

    const testErr = (x) => {
      const pathMap = { 'foo.bar': x, };

      expect(() => shapeFrom(pathMap)).toThrow(errType);
      expect(() => shapeFrom(pathMap)).toThrow(errMsg);
    };

    [ 1, null, undefined, [], {}, ].forEach(testErr);
  });

  test(`Returns a higher-order component.`, () => {});

  test(`Component maps deeply nested props for each entry in \`pathMap\`.`, () => {});

  test(`Component passes new props to base component.`, () => {});

  test(`The shape of the new props matches the shape testd by \`pathMap\``, () => {});
});

