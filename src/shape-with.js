import createFactory from './create-factory';
import mapShape from './map-shape';
import validateShapeMap from './validate-shape-map';

const shapeWith = (shapeMap) => {
  const mapper = mapShape(shapeMap);

  return (BaseComponent) => {
    const factory = createFactory(BaseComponent);

    return (props) => factory(mapper(props));
  };
};

export default validateShapeMap(shapeWith);

