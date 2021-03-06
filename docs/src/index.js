import React from 'react';
import ReactDOM from 'react-dom';
import {getUI} from '../../lib';
import {TabsDocument} from './tabs-document';
import {ListDocument} from './list-document';
import {SwipeableViewDocument} from './swipeable-view-document';
import {IconDocument} from './icon-document';
import {ButtonsDocument} from './buttons-document';
import {LinkTextDocument} from './link-text-document';

class Documents extends React.Component {
  render() {
    const ui = getUI(navigator.userAgent);
    return (
      <section className={`handle-ui-content ${ui}`}>
        <h1 className="handle-ui-title">Handle UI</h1>
        <hr/>
        <h2 className="handle-ui-components">Components</h2>
        <ul className="handle-ui-component-list">
          <li><a href="#tabs">Tabs</a></li>
          <li><a href="#list">List</a></li>
          <li><a href="#swipeable-view">Swipeable View(touch device)</a></li>
          <li><a href="#icon">Icon</a></li>
          <li><a href="#buttons">Buttons</a></li>
          <li><a href="#link-text">Link Text</a></li>
        </ul>
        <hr/>
        <TabsDocument/>
        <hr/>
        <ListDocument/>
        <hr/>
        <SwipeableViewDocument/>
        <hr/>
        <IconDocument/>
        <hr/>
        <ButtonsDocument/>
        <hr/>
        <LinkTextDocument/>
      </section>
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('start app.');
  ReactDOM.render(<Documents/>, document.querySelector('.app'));
});
