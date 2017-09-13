import createFactory from './create-factory';
import mapShape from './map-shape';
import validateShapeMap from './validate-shape-map';
import { deepMerge, } from './util';

const shapeWith = (pathMap) => {
  const mapper = mapShape(pathMap);

  return (BaseComponent) => {
    const factory = createFactory(BaseComponent);

    return (props) => factory(deepMerge(props, mapper(props)));
  };
};

export default validateShapeMap(shapeWith);

