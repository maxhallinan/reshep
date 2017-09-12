import { entries, } from './util';

const mapShape = (shapeMap) => {
  const paths = entries(shapeMap);

  return (props) => props;
}

export default mapShape;
