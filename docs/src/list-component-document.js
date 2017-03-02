import React from 'react';
import {
  List,
  ListItem,
} from '../../lib/list';


export class ListComponentDocument extends React.Component {
  constructor() {
    super();

    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'],
      sortableItems: ['Item 1', 'Item 2', 'Item 3'],
    };
  }
  render() {
    return (
      <section id="list" className="component-block">
        <h2 className="component-block-title">List</h2>
        <section className="component-block-example">
          <button onClick={() => {
            const newItems = this.state.items.concat();
            newItems.push(`Item ${newItems.length + 1}`);
            this.setState({
              items: newItems,
            });
          }}>Add item</button>
          <button onClick={() => {
            const newItems = this.state.items.concat();
            newItems.pop();
            this.setState({
              items: newItems,
            });
          }}>Remove item</button>
          <List>
            {this.state.items.map((item, index) => {
              return (
                <ListItem key={index}>
                  <div className="example-list-item-content">{item}</div>
                </ListItem>
              );
            })}
          </List>
        </section>
        <pre>
          <code>
{`<List>
  {this.state.items.map((item, index) => {
    return (
      <ListItem key={index}>
        <div className="example-list-item-content">{item}</div>
      </ListItem>
    );
  })}
</List>`}
          </code>
        </pre>
        <p className="component-block-example-description">with Sort</p>
        <section className="component-block-example">
          <List onSort={(from, to) => {
            const newItems = this.state.sortableItems.concat();
            const tmpItem = newItems.splice(from, 1);
            newItems.splice(to, 0, tmpItem[0]);
            this.setState({
              sortableItems: newItems,
            });
          }}>
            {this.state.sortableItems.map((item, index) => {
              return (
                <ListItem key={index}>
                  <div className="example-list-item-content">{item}</div>
                </ListItem>
              );
            })}
          </List>
        </section>
        <pre>
          <code>
{`<List onSort={(from, to) => {
  const newItems = this.state.sortableItems.concat();
  const tmpItem = newItems.splice(from, 1);
  newItems.splice(to, 0, tmpItem[0]);
  this.setState({
    sortableItems: newItems,
  });
}}>
  {this.state.sortableItems.map((item, index) => {
    return (
      <ListItem key={index}>
        <div className="example-list-item-content">{item}</div>
      </ListItem>
    );
  })}
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

