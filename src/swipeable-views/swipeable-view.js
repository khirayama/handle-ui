import React, {Component, PropTypes} from 'react';

export class SwipeableView extends Component {
  constructor() {
    super();

    this.setSwipeableViewElement = this._setSwipeableViewElement.bind(this);
  }
  getChildContext() {
    return {
      swipeableViewElement: () => this.swipeableViewElement,
      getProps: () => this.props,
    };
  }
  _setSwipeableViewElement(swipeableViewElement) {
    this.swipeableViewElement = swipeableViewElement;
  }
  render() {
    return (
      <div
        className="swipeable-view"
        ref={this.setSwipeableViewElement}
      >{this.props.children}</div>
    );
  }
}

SwipeableView.childContextTypes = {
  swipeableViewElement: PropTypes.func,
  getProps: PropTypes.func,
};

SwipeableView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
