import { deepMerge, } from './../util';

describe(`reshep > util > deepMerge`, () => {
  test(`Merges object sources.`, () => {
    const a = { x: 1, };
    const b = { y: 2, };

    const result = deepMerge(a, b);
    const expected = { x: 1, y: 2, };

    expect(result).toEqual(expected);
  });

  test(`Overwrites non-object values at same path.`, () => {
    const a = { x: 1, };
    const b = { x: 2, };

    const result = deepMerge(a, b);
    const expected = { x: 2, };

    expect(result).toEqual(expected);
  });

  test(`Gives merge precedence to right most source.`, () => {
    const a = { x: { y: 1, }, };
    const b = { x: 2, };

    expect(deepMerge(a, b)).toEqual(b);
    expect(deepMerge(b, a)).toEqual(a);
  });

  test(`Merges nested objects.`, () => {
    const a = { x: { y: 1, }, };
    const b = { x: { z: 2, }, };

    const result = deepMerge(b, a);
    const expected = { x: { y: 1, z: 2, }, };

    expect(result).toEqual(expected);
  });

  test(`Deeply merges an arbitrary number of objects at arbitrary depths.`, () => {
    const a = { x: 1, y: 2, };
    const b = { x: 1, y: { z: 2, }, };
    const c = { z: 3, };
    const d = { x: { y: { z: 3, }, }, };

    const result = deepMerge(a, b, c, d);
    const expected = { x: { y: { z: 3, }, }, y: { z: 2, }, z: 3, };

    expect(result).toEqual(expected);
  });

  test(`Does not deeply merge arrays.`, () => {
    const a = { x: [ true, ], };
    const b = { x: [ false, ], };

    const result = deepMerge(a, b);
    const expected = { x: [ false, ], };

    expect(result).toEqual(expected);
  });
});
