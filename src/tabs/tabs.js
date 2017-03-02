import React, {Component, PropTypes} from 'react';

export class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: props.index || 0,
    };

    this.setCurrentIndex = this._setCurrentIndex.bind(this);
  }
  _setCurrentIndex(index) {
    this.setState({currentIndex: index});
  }
  getChildContext() {
    return {
      currentIndex: this.state.currentIndex,
      setCurrentIndex: this.setCurrentIndex,
    };
  }
  render() {
    return (
      <section
        className="tabs"
        >{this.props.children}</section>
    );
  }
}

Tabs.childContextTypes = {
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
};

Tabs.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node,
};
