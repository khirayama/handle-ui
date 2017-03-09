import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export class TabContentListItem extends Component {
  render() {
    let isHidden = false;
    if (
      this.props.index < this.context.currentIndex - 1 ||
      this.context.currentIndex + 1 < this.props.index
    ) {
      isHidden = true;
    }
    return (
      <section
        onTouchStart={this.context.handleTouchStart}
        onTouchMove={this.context.handleTouchMove}
        onTouchEnd={this.context.handleTouchEnd}
        className={classNames(
          "tab-content-list-item",
          {'tab-content-list-item__hidden': isHidden}
        )}
        >
        <section className="tab-content-list-item-inner">{this.props.children}</section>
      </section>
    );
  }
}

TabContentListItem.contextTypes = {
  handleTouchStart: PropTypes.func,
  handleTouchMove: PropTypes.func,
  handleTouchEnd: PropTypes.func,
  currentIndex: PropTypes.number,
};

TabContentListItem.propTypes = {
  children: PropTypes.node,
};

