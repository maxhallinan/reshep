import createElement from './create-element';
import mapShape from './map-shape';
import validateShapeMap from './validate-shape-map';

const shapeFrom = (shapeMap) => (BaseComponent) => {
  return (props) => createElement(BaseComponent, mapShape(shapeMap)(props));
};

export default validateShapeMap(shapeFrom);

