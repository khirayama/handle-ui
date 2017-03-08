import React, {Component, PropTypes} from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import classNames from 'classnames';

export class List extends Component {
  constructor() {
    super();

    this.setListElement = this._setListElement.bind(this);
  }
  componentDidMount() {
    this.listElement.querySelector('.list-content').addEventListener('contextmenu', event => {
      event.preventDefault();
    });
  }
  getChildContext() {
    return {
      listElement: () => this.listElement,
      onSort: this.props.onSort,
    };
  }
  _setListElement(listElement) {
    this.listElement = listElement;
  }
  render() {
    return (
      <section
        className={classNames('list', this.props.className)}
        ref={this.setListElement}
        >
        <div className="list-content">
          <ReactTransitionGroup>{this.props.children}</ReactTransitionGroup>
        </div>
      </section>
    );
  }
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onSort: PropTypes.func,
};

List.childContextTypes = {
  listElement: PropTypes.func,
  onSort: PropTypes.func,
};
