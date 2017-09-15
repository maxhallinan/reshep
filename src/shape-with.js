import createFactory from './create-factory';
import mapShape from './map-shape';
import setDisplayName from './set-display-name';
import validateShapeMap from './validate-shape-map';
import wrapDisplayName from './wrap-display-name';
import { deepMerge, } from './util';

const shapeWith = (pathMap) => {
  const mapper = mapShape(pathMap);

  return (BaseComponent) => {
    const factory = createFactory(BaseComponent);

    const ShapeWith = (props) => factory(deepMerge(props, mapper(props)));

    if (process.env.NODE_ENV !== `production`) {
      return setDisplayName(wrapDisplayName(BaseComponent, `shapeWith`))(ShapeWith);
    }

    return ShapeWith;
  };
};

export default validateShapeMap(shapeWith);

