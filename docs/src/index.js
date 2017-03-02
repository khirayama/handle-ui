import React from 'react';
import ReactDOM from 'react-dom';
import {
  Tabs,
  TabList,
  TabListItem,
  TabContentList,
  TabContentListItem,
} from '../../lib/tabs';

class Document extends React.Component {
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

        <section id="tabs" className="component-block">
          <h2 className="component-block-title">Tabs</h2>
          <p>Components: Tabs / TabList / TabListItem / TabContentList / TabContentListItem</p>
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
                  <td>Component</td>
                  <td>Name</td>
                  <td>Type</td>
                  <td>Default</td>
                  <td>Description</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </section>
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('start app.');
  ReactDOM.render(<Document/>, document.querySelector('.app'));
});
