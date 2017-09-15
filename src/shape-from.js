import createFactory from './create-factory';
import mapShape from './map-shape';
import setDisplayName from './set-display-name';
import validateShapeMap from './validate-shape-map';
import wrapDisplayName from './wrap-display-name';

const shapeFrom = (pathMap) => {
  const mapper = mapShape(pathMap);

  return (BaseComponent) => {
    const factory = createFactory(BaseComponent);

    const ShapeFrom = (props) => factory(mapper(props));

    if (process.env.NODE_ENV !== `production`) {
      return setDisplayName(wrapDisplayName(BaseComponent, `shapeFrom`))(ShapeFrom);
    }

    return ShapeFrom;
  };
};

export default validateShapeMap(shapeFrom);

