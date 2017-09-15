import getDisplayName from './get-display-name';

const wrapDisplayName = (BaseComponent, hocName) =>
  `${hocName}(${getDisplayName(BaseComponent)})`;

export default wrapDisplayName;
