import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export class SwipeableViewBackground extends Component {
  render() {
    return (
      <div
        className={
          classNames(
            this.props.className,
            'swipeable-view-background',
            {'swipeable-view-background__left': this.props.position === 'left'},
            {'swipeable-view-background__right': this.props.position === 'right'}
          )
        }
        >{this.props.children}</div>
    );
  }
}

SwipeableViewBackground.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.string.isRequired,
};
