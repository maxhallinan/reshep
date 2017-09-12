import createElement from './create-element';
import mapShape from './map-shape';
import validateShapeMap from './validate-shape-map';

const shapeWith = (shapeMap) => (BaseComponent) => {
  return (props) => createElement(BaseComponent, mapShape(shapeMap)(props));
};

export default validateShapeMap(shapeWith);

