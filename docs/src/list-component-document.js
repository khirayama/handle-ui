import React from 'react';
import {
  List,
  ListItem,
} from '../../lib/list';

export class ListComponentDocument extends React.Component {
  render() {
    return (
      <section id="list" className="component-block">
        <h2 className="component-block-title">List</h2>
        <section className="component-block-example">
          <List>
            <ListItem>
              <div className="example-list-item-content">Item 1</div>
            </ListItem>
            <ListItem>
              <div className="example-list-item-content">Item 2</div>
            </ListItem>
            <ListItem>
              <div className="example-list-item-content">Item 3</div>
            </ListItem>
          </List>
        </section>
        <pre>
          <code>
{`<List>
  <ListItem>
    <div className="example-list-item-content">Item 1</div>
  </ListItem>
  <ListItem>
    <div className="example-list-item-content">Item 2</div>
  </ListItem>
  <ListItem>
    <div className="example-list-item-content">Item 3</div>
  </ListItem>
</List>`}
          </code>
        </pre>
        <p className="component-block-example-description">with Sort</p>
        <section className="component-block-example">
          <List onSort={(from, to) => console.log(from, to)}>
            <ListItem>
              <div className="example-list-item-content">Item 1</div>
            </ListItem>
            <ListItem>
              <div className="example-list-item-content">Item 2</div>
            </ListItem>
            <ListItem>
              <div className="example-list-item-content">Item 3</div>
            </ListItem>
          </List>
        </section>
        <pre>
          <code>
{`<List onSort={(from, to) => console.log(from, to)}>
  <ListItem>
    <div className="example-list-item-content">Item 1</div>
  </ListItem>
  <ListItem>
    <div className="example-list-item-content">Item 2</div>
  </ListItem>
  <ListItem>
    <div className="example-list-item-content">Item 3</div>
  </ListItem>
</List>`}
          </code>
        </pre>
        <section className="component-block-properties">
          <h3 className="component-block-properties-title">List Properties</h3>
          <p className="component-block-components-title">Components:</p>
          <ul className="component-block-components-list">
            <li>List</li>
            <li>ListItem</li>
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
            </tbody>
          </table>
        </section>
      </section>
    );
  }
}

