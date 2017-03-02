import React from 'react';
import ReactDOM from 'react-dom';
import {TabsComponentDocument} from './tabs-component-document';

class Documents extends React.Component {
  render() {
    return (
      <section className="handle-ui-content">
        <h1 className="handle-ui-title">Handle UI</h1>

        <hr/>

        <h2 className="handle-ui-components">Components</h2>
        <ul className="handle-ui-component-list">
          <li><a href="#tabs">Tabs</a></li>
        </ul>

        <hr/>

        <TabsComponentDocument />
      </section>
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('start app.');
  ReactDOM.render(<Documents/>, document.querySelector('.app'));
});
