import React from 'react';
import ReactDOM from 'react-dom';
import {
  Tabs,
  TabList,
  TabListItem,
  TabContentList,
  TabContentListItem,
} from '../../lib/tabs';

class TabsComponentDocument extends React.Component {
  render() {
    return (
      <section id="tabs" className="component-block">
        <h2 className="component-block-title">Tabs</h2>
        <section className="component-block-example">
          <Tabs>
            <TabList>
              <TabListItem index={0}>tab 1</TabListItem>
              <TabListItem index={1}>tab 2</TabListItem>
              <TabListItem index={2}>tab 3</TabListItem>
            </TabList>
            <TabContentList>
              <TabContentListItem index={0}>
                <div className="example-tab-content">content 1</div>
              </TabContentListItem>
              <TabContentListItem index={1}>
                <div className="example-tab-content">content 2</div>
              </TabContentListItem>
              <TabContentListItem index={2}>
                <div className="example-tab-content">content 3</div>
              </TabContentListItem>
            </TabContentList>
          </Tabs>
        </section>
        <pre>
          <code>
{`<Tabs>
<TabList>
  <TabListItem index={0}>tab 1</TabListItem>
  <TabListItem index={1}>tab 2</TabListItem>
  <TabListItem index={2}>tab 3</TabListItem>
</TabList>
<TabContentList>
  <TabContentListItem index={0}>
    <div className="example-tab-content">content 1</div>
  </TabContentListItem>
  <TabContentListItem index={1}>
    <div className="example-tab-content">content 2</div>
  </TabContentListItem>
  <TabContentListItem index={2}>
    <div className="example-tab-content">content 3</div>
  </TabContentListItem>
</TabContentList>
</Tabs>`}
          </code>
        </pre>
        <section className="component-block-properties">
          <h3 className="component-block-properties-title">Tabs Properties</h3>
          <p className="component-block-components-title">Components:</p>
          <ul className="component-block-components-list">
            <li>Tabs</li>
            <li>TabList</li>
            <li>TabListItem</li>
            <li>TabContentList</li>
            <li>TabContentListItem</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tabs</td>
                <td>index</td>
                <td>Number</td>
                <td>0</td>
                <td>Current tab index.</td>
              </tr>
              <tr>
                <td>TabListItem</td>
                <td>index</td>
                <td>Number</td>
                <td>0</td>
                <td>Tab index.</td>
              </tr>
              <tr>
                <td>TabListItem</td>
                <td>onActive</td>
                <td>function</td>
                <td>{"() => {}"}</td>
                <td>event handler on active.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    );
  }
}

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
