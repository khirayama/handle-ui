import React, {PropTypes} from 'react';

export function FlatButton(props) {
  const props_ = Object.assign({}, props);
  props_.className = (props_.className) ? props_.className + ' flat-button' : 'flat-button';

  return <button {...props_}>{props.children}</button>;
}

FlatButton.propTypes = {
  children: PropTypes.node,
};
