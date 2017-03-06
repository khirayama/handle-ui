import React, {PropTypes} from 'react';

export function FloatingButton(props) {
  const props_ = Object.assign({}, props);
  props_.className = (props_.className) ? props_.className + ' floating-button' : 'floating-button';

  return <button {...props_}>{props.children}</button>;
}

FloatingButton.propTypes = {
  children: PropTypes.node,
};
