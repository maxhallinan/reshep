import { mount, } from 'enzyme';
import 'jest-enzyme';
import React from 'react';
import { shapeWith, } from './../';
import { getPath, typeOf, } from './../util';

describe(`reshep > shapeWith`, () => {
  test(`Throws a TypeError if pathMap is not an object.`, () => {
    const errType = () => TypeError;
    const errMsg = (type) => (
      `Expected \`pathMap\` to be an object. `
      + `\`pathMap\` is type ${type} instead.`);

    const testErr = (x) => {
      expect(() => shapeWith(x)).toThrow(errType());
      expect(() => shapeWith(x)).toThrow(errMsg(typeOf(x)));
    };

    [ `foo`, 1, null, undefined, [], ].forEach(testErr);
  });

  test(`Returns a higher-order component.`, () => {
    const Base = () => React.createElement(`p`, {}, `foo`);

    const HOC = shapeWith({})(Base);

    const wrapped = mount(React.createElement(HOC, {}));

    expect(wrapped).toContainReact(React.createElement(Base));
  });

  test(`Component maps deeply nested props for each entry in \`pathMap\`.`, () => {
    const props = {
      a: { b: { c: 1, }, },
      d: { e: 2, },
      f: 3,
    };

    const pathMap = {
      'a.b.c': `a`,
      'd.e': `b.c`,
      'f': `d.e.f`,
    };

    const Base = jest.fn();
    Base.mockReturnValue(null);

    const HOC = shapeWith(pathMap)(Base);

    mount(React.createElement(HOC, props));

    const baseProps = Base.mock.calls[0][0];

    Object.keys(pathMap)
      .map((k) => [ k, pathMap[k], ])
      .map((paths) => paths.map(p => p.split(`.`)))
      .map(([ from, to, ]) =>
        ([ getPath(from, props), getPath(to, baseProps), ]))
      .forEach(([ from, to, ]) => expect(from).toEqual(to));
  });

  test(`Component merges owner props and mapped props.`, () => {
    const props = {
      a: { b: { c: 1, }, },
      d: { e: 2, },
      f: 3,
    };

    const pathMap = {
      'a.b.c': `g`,
      'd.e': `h.i`,
      'f': `j.k.l`,
    };

    const Base = jest.fn();
    Base.mockReturnValue(null);

    const HOC = shapeWith(pathMap)(Base);

    mount(React.createElement(HOC, props));

    const baseProps = Base.mock.calls[0][0];

    const expected = {
      ...props,
      g: 1,
      h: { i: 2, },
      j: { k: { l: 3, }, },
    };

    expect(baseProps).toEqual(expected);
  });

  test(`Owner props are overwritten by mapped props.`, () => {
    const props = {
      a: { b: { c: 1, }, },
      d: { e: 2, },
      f: 3,
    };

    const pathMap = {
      'a.b.c': `a`,
      'f': `d.e`,
    };

    const Base = jest.fn();
    Base.mockReturnValue(null);

    const HOC = shapeWith(pathMap)(Base);

    mount(React.createElement(HOC, props));

    const baseProps = Base.mock.calls[0][0];

    const expected = {
      a: 1,
      d: { e: 3, },
      f: 3,
    };

    expect(baseProps).toEqual(expected);
  });

  test(`Wraps the displayName of a string component type.`, () => {
    const pathMap = { 'a': `b`, };

    const HOC = shapeWith(pathMap)(`p`);

    expect(HOC.displayName).toEqual(`shapeWith(p)`);
  });

  test(`Wraps the displayName of a function component type.`, () => {
    const pathMap = { 'a': `b`, };

    const Base = () => null;

    const Named = shapeWith(pathMap)(Base);
    const Anon = shapeWith(pathMap)(() => null);

    expect(Named.displayName).toEqual(`shapeWith(Base)`);
    expect(Anon.displayName).toEqual(`shapeWith(Component)`);
  });

  test(`Wraps the displayName of a class component type.`, () => {
    const pathMap = { 'a': `b`, };

    class Base extends React.Component {
      static displayName = `Base`;

      render() {
        return null;
      }
    }

    const HOC = shapeWith(pathMap)(Base);

    expect(HOC.displayName).toEqual(`shapeWith(Base)`);
  });

  test(`Wraps the displayName of a null value.`, () => {
    const pathMap = { 'a': `b`, };

    const HOC = shapeWith(pathMap)(null);

    expect(HOC.displayName).toEqual(`shapeWith(undefined)`);
  });

  test(`Does not wrap displayName in production env`, () => {
    const pathMap = { a: `b`, };

    const Base = () => null;

    process.env.NODE_ENV = `production`;

    const HOC = shapeWith(pathMap)(Base);

    expect(HOC.displayName).toEqual(undefined);

    process.env.NODE_ENV = `test`;
  });
});

