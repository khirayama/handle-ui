import React, {PropTypes} from 'react';

export function Icon(props) {
  const props_ = Object.assign({}, props);
  props_.className = (props_.className) ? props_.className + ' icon' : 'icon';
  delete props_.size;

  const style = {};
  if (props.fontSize) {
    style.fontSize = props.fontSize;
  }

  return <span style={style} {...props_}>{props.children}</span>;
}

Icon.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.string,
};
