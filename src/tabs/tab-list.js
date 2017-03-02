import React, {Component, PropTypes} from 'react';

export class TabList extends Component {
  render() {
    return (
      <section className="tab-list">
        <section className="tab-list-inner">
          {this.props.children}
        </section>
      </section>
    );
  }
}

TabList.propTypes = {
  children: PropTypes.node,
};
