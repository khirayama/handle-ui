import React from 'react';
import ReactDOM from 'react-dom';
import {TabsComponentDocument} from './tabs-component-document';
import {ListComponentDocument} from './list-component-document';
import {SwipeableViewsComponentDocument} from './swipeable-views-component-document';

class Documents extends React.Component {
  render() {
    return (
      <section className="handle-ui-content">
        <h1 className="handle-ui-title">Handle UI</h1>
        <hr/>
        <h2 className="handle-ui-components">Components</h2>
        <ul className="handle-ui-component-list">
          <li><a href="#tabs">Tabs</a></li>
          <li><a href="#list">List</a></li>
          <li><a href="#swipeable-view">Swipeable View</a></li>
        </ul>
        <hr/>
        <TabsComponentDocument/>
        <hr/>
        <ListComponentDocument/>
        <hr/>
        <SwipeableViewsComponentDocument/>
      </section>
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('start app.');
  ReactDOM.render(<Documents/>, document.querySelector('.app'));
});
