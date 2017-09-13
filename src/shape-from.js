import createFactory from './create-factory';
import mapShape from './map-shape';
import validateShapeMap from './validate-shape-map';

const shapeFrom = (pathMap) => {
  const mapper = mapShape(pathMap);

  return (BaseComponent) => {
    const factory = createFactory(BaseComponent);

    return (props) => factory(mapper(props));
  };
};

export default validateShapeMap(shapeFrom);

