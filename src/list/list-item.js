import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import {
  TRANSITION_TIME,
  THRESHOLD_HOLD_TIME,
  THRESHOLD_SCROLL_HEIGHT,
  transitionProperties,
} from '../constants';

export class ListItem extends Component {
  constructor() {
    super();

    this.pointer = {
      startX: null,
      startY: null,
      startScrollTop: null,
      startTime: new Date(),
      endX: null,
      endY: null,
      endTime: new Date(),
    };

    // desktop
    this.mouse = {
      down: false,
      clickable: true,
    };
    this.handleClick = this._handleClick.bind(this);
    this.handleMouseDown = this._handleMouseDown.bind(this);
    this.handleMouseMove = this._handleMouseMove.bind(this);
    this.handleMouseUp = this._handleMouseUp.bind(this);

    // mobile
    this.touch = {
      timerId: null,
      holding: false,
    };
    this.handleTouchStart = this._handleTouchStart.bind(this);
    this.handleTouchMove = this._handleTouchMove.bind(this);
    this.handleTouchEnd = this._handleTouchEnd.bind(this);
    this.handleTouchHold = this._handleTouchHold.bind(this);

    this.setListItem = this._setListItem.bind(this);
  }
  componentWillEnter(done) {
    const el = this.listItem;
    const height = el.offsetHeight;

    el.style.maxHeight = '0px';

    el.style.transitionProperty = transitionProperties.MAX_HEIGHT;
    setTimeout(() => {
      el.style.maxHeight = height + 'px';
    }, 0);
    setTimeout(() => {
      el.style.maxHeight = '';
      el.style.transitionProperty = '';
      done();
    }, TRANSITION_TIME);
  }
  componentWillLeave(done) {
    const el = this.listItem;
    const height = el.offsetHeight;

    el.style.height = height + 'px';

    el.style.transitionProperty = transitionProperties.HEIGHT;
    setTimeout(() => {
      el.style.height = '0px';
    }, 0);

    setTimeout(() => {
      done();
    }, TRANSITION_TIME);
  }
  componentDidMount() {
    // can't prevent event passive in Chrome.
    // because not use onTouchMove
    this.listItem.addEventListener('touchmove', this.handleTouchMove);
  }

  // handling event
  _handleClick(event) {
    if (this.mouse.clickable && this.props.onClick) {
      this.props.onClick(event);
    }
  }
  _handleMouseDown(event) {
    this.mouse.down = true;
    this.pointer = Object.assign({}, this.pointer, {
      startX: event.clientX,
      startY: event.clientY,
      startScrollTop: this.context.listElement().scrollTop,
      startTime: new Date(),
    });
  }
  _handleMouseMove(event) {
    if (this.mouse.down) {
      this.mouse.clickable = false;
      this.pointer = Object.assign({}, this.pointer, {
        endX: event.clientX,
        endY: event.clientY,
        endTime: new Date(),
      });

      if (this.context.onSort) {
        this._updatePointerMoveView();
      }
    }
  }
  _handleMouseUp() {
    this._updatePointerUpView();

    const {currentIndex, targetIndex} = this._calcIndex();

    if (currentIndex !== null && targetIndex !== null && this.context.onSort) {
      this.context.onSort(currentIndex, targetIndex);
    }

    this.mouse.down = false;
    this.mouse.clickable = this.mouse.clickable;
    this.pointer = {
      startX: null,
      startY: null,
      startScrollTop: null,
      endX: null,
      endY: null,
    };
    setTimeout(() => {
      this.mouse.clickable = true;
    }, 0);
  }

  _handleTouchStart(event) {
    this.touch.timerId = setTimeout(this.handleTouchHold, THRESHOLD_HOLD_TIME);
    this.pointer = Object.assign({}, this.pointer, {
      startX: event.touches[0].clientX,
      startY: event.touches[0].clientY,
      startScrollTop: this.context.listElement().scrollTop,
      startTime: new Date(),
    });
  }
  _handleTouchMove(event) {
    if (this.touch.holding) {
      event.stopPropagation();
      event.preventDefault();
    }

    const distance = Math.sqrt(
      Math.pow(event.touches[0].clientX - this.pointer.startX, 2) +
      Math.pow(event.touches[0].clientY - this.pointer.startY, 2)
    );

    if (distance > 10) {
      clearTimeout(this.touch.timerId);

      this.pointer = Object.assign({}, this.pointer, {
        endX: event.touches[0].clientX,
        endY: event.touches[0].clientY,
        endTime: new Date(),
      });

      if (this.touch.holding && this.context.onSort) {
        this._updatePointerMoveView();
      }
    }
  }
  _handleTouchHold() {
    this.touch.holding = true;

    if (this.props.onTouchHold || this.context.onSort) {
      this._updateTouchHoldView();
    }

    if (this.props.onTouchHold) {
      this.props.onTouchHold();
    }
  }
  _handleTouchEnd() {
    clearTimeout(this.touch.timerId);

    this._updatePointerUpView();

    const {currentIndex, targetIndex} = this._calcIndex();
    if (this.touch.holding && currentIndex !== null && targetIndex !== null && this.context.onSort) {
      this.context.onSort(currentIndex, targetIndex);
    }

    this.touch.timerId = null;
    this.touch.holding = false;
    this.pointer = {
      startX: null,
      startY: null,
      startScrollTop: null,
      startTime: new Date(),
      endX: null,
      endY: null,
      endTime: new Date(),
    };
  }

  // update views
  _updatePointerMoveView() {
    const listElement = this.context.listElement();

    listElement.classList.add('list__sorting');
    this.listItem.classList.add('list-item__sorting');

    this._moveCurrentListItemAnimation();
    this._moveListItemAnimation();
    this._scrollListView();
  }
  _updatePointerUpView() {
    if (this.listItem.classList.contains('list-item__holding')) {
      this.listItem.classList.remove('list-item__holding');
    }
    if (this.listItem.classList.contains('list-item__sorting')) {
      this.listItem.classList.remove('list-item__sorting');
    }

    const listElement = this.context.listElement();
    const listItemElements = listElement.querySelectorAll('.list-item');

    for (let index = 0; index < listItemElements.length; index++) {
      const listItemElement = listItemElements[index];

      listItemElement.style.transform = 'translateY(0px)';
      listItemElement.style.transitionProperty = transitionProperties.HEIGHT;
    }
  }
  _updateTouchHoldView() {
    if (!this.listItem.classList.contains('list-item__holding')) {
      this.listItem.style.transitionProperty = transitionProperties.ALL;
      this.listItem.classList.add('list-item__holding');
    }
  }

  // animation
  _moveCurrentListItemAnimation() {
    const diff = this._calcDiff();
    const scrollDiff = this.pointer.startScrollTop - this.context.listElement().scrollTop;

    this.listItem.style.transitionProperty = transitionProperties.NONE;
    this.listItem.style.transform = `translateY(${diff.y - scrollDiff}px)`;
  }
  _moveListItemAnimation() {
    const listElement = this.context.listElement();
    const listItemElements = listElement.querySelectorAll('.list-item');

    const height = this.listItem.offsetHeight;

    const {currentIndex, targetIndex} = this._calcIndex();

    if (currentIndex !== null && targetIndex !== null) {
      if (currentIndex <= targetIndex) {
        for (let index = 0; index < listItemElements.length; index++) {
          const listItemElement = listItemElements[index];

          if (currentIndex < index && index <= targetIndex) {
            listItemElement.style.transitionProperty = transitionProperties.TRANSFORM;
            listItemElement.style.transform = `translateY(-${height}px)`;
          } else if (currentIndex !== index) {
            listItemElement.style.transitionProperty = transitionProperties.TRANSFORM;
            listItemElement.style.transform = 'translateY(0px)';
          }
        }
      }
      if (targetIndex <= currentIndex) {
        for (let index = 0; index < listItemElements.length; index++) {
          const listItemElement = listItemElements[index];

          if (targetIndex <= index && index < currentIndex) {
            listItemElement.style.transitionProperty = transitionProperties.TRANSFORM;
            listItemElement.style.transform = `translateY(${height}px)`;
          } else if (currentIndex !== index) {
            listItemElement.style.transitionProperty = transitionProperties.TRANSFORM;
            listItemElement.style.transform = 'translateY(0px)';
          }
        }
      }
    }
  }
  _scrollListView() {
    const listElement = this.context.listElement();
    const listContentElement = listElement.querySelector('.list-content');
    const listElementRect = listElement.getBoundingClientRect();

    if (!this.timerId) {
      this.timerId = setInterval(() => {
        if (
          this.pointer.endY &&
          listElement.scrollTop > 0 &&
          this.pointer.endY < listElementRect.top + THRESHOLD_SCROLL_HEIGHT
        ) {
          listElement.scrollTop -= 3;
          this._moveCurrentListItemAnimation();
          this._moveListItemAnimation();
        } else if (
          this.pointer.endY &&
          listElement.scrollTop < listContentElement.offsetHeight - listElement.offsetHeight &&
          this.pointer.endY > listElementRect.top + listElement.offsetHeight - THRESHOLD_SCROLL_HEIGHT
        ) {
          listElement.scrollTop += 3;
          this._moveCurrentListItemAnimation();
          this._moveListItemAnimation();
        } else {
          clearTimeout(this.timerId);
          this.timerId = null;
        }
      }, 1000 / 60);
    }
  }
  _calcDiff() {
    let x = this.pointer.endX - this.pointer.startX;
    let y = this.pointer.endY - this.pointer.startY;
    let time = this.pointer.endTime.getTime() - this.pointer.startTime.getTime();

    time = (time < 0) ? 0 : time;

    if (this.pointer.endX === null || this.pointer.endY === null) {
      x = 0;
      y = 0;
    }
    return {
      x,
      y,
      time,
      delta: {
        x: Number((x / time).toFixed(2)),
        y: Number((y / time).toFixed(2)),
      },
    };
  }
  _calcIndex() {
    const listElement = this.context.listElement();
    const listItemElements = listElement.querySelectorAll('.list-item');

    const scrollTop = listElement.scrollTop;
    const listRect = listElement.getBoundingClientRect();
    const listTop = listRect.top;
    const listHeight = listRect.height;

    let currentIndex = null;
    let targetIndex = null;

    if (this.pointer.startX !== null && this.pointer.startY !== null && this.pointer.endX !== null && this.pointer.endY !== null) {
      for (let index = 0; index < listItemElements.length; index++) {
        const listItemElement = listItemElements[index];
        const targetRect = {
          top: listTop + listItemElement.offsetTop,
          height: listItemElement.offsetHeight,
        };

        if (listItemElement === this.listItem) {
          currentIndex = index;
        }
        if (this.pointer.endY < listTop) {
          targetIndex = 0;
        } else if (listTop + listHeight < this.pointer.endY) {
          targetIndex = listItemElements.length - 1;
        } else if (
        this.pointer.endX !== null && this.pointer.endY !== null &&
          targetRect.top - scrollTop < this.pointer.endY &&
          this.pointer.endY < targetRect.top + targetRect.height - scrollTop
      ) {
          targetIndex = index;
        }
      }
    }

    return {
      currentIndex,
      targetIndex,
    };
  }
  _setListItem(listItem) {
    this.listItem = listItem;
  }
  render() {
    const props = Object.assign({}, this.props);

    return (
      <div
        {...props}
        className={classNames(this.props.className, 'list-item')}
        ref={this.setListItem}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        >{this.props.children}</div>
    );
  }
}

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onTouchHold: PropTypes.func,
};

ListItem.contextTypes = {
  listElement: PropTypes.func,
  onSort: PropTypes.func,
};
