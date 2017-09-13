import { setPath, } from './../util';

describe(`reshep > util > setPath`, () => {
  test(`Sets a shallow path.`, () => {
    const path = [ `a`, ];
    const value = true;
    const target = { b: false, };

    const result = setPath(path, value, target);
    const expected = { a: true, b: false, };

    expect(result).toEqual(expected);
  });

  test(`Sets a deep path that doesn't exist.`, () => {
    const path = [ `a`, `b`, `c`, ];
    const value = true;
    const target = { b: false, };

    const result = setPath(path, value, target);
    const expected = { a: { b: { c: true, }, }, b: false, };

    expect(result).toEqual(expected);
  });

  test(`Sets a deep path that does exist`, () => {
    const path = [ `a`, `b`, `c`, ];
    const value = true;
    const target = { a: { b: { c: false, d: false, }, }, };

    const result = setPath(path, value, target);
    const expected = { a: { b: { c: true, d: false, }, }, };

    expect(result).toEqual(expected);
  });
});
