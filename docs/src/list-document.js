import React from 'react';
import {ComponentDocument} from './component-document';
import {
  List,
  ListItem,
} from '../../lib/list';

export class ListDocument extends React.Component {
  constructor() {
    super();

    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'],
      sortableItems: ['Item 1', 'Item 2', 'Item 3'],
    };
  }
  render() {
    const props = {
      id: 'list',
      name: 'List',
      codes: [{
        description: '',
        text: `
<List>
  {this.state.items.map((item, index) => {
    return (
      <ListItem key={index}>
        <div className="example-list-item-content">{item}</div>
      </ListItem>
    );
  })}
</List>
        `,
      }, {
        description: 'with sort',
        text: `
<List
  onSort={(from, to) => {
    const newItems = this.state.sortableItems.concat();
    const tmpItem = newItems.splice(from, 1);
    newItems.splice(to, 0, tmpItem[0]);
    this.setState({
      sortableItems: newItems,
    });
  }}
  >
  {this.state.sortableItems.map((item, index) => {
    return (
      <ListItem key={index}>
        <div className="example-list-item-content">{item}</div>
      </ListItem>
    );
  })}
</List>
        `,
      }],
      components: ['List', 'ListItem'],
      properties: [{
        component: 'List',
        name: 'onSort',
        type: 'Function',
        default: '() => {}',
        description: 'Called when sort items. Get from and to index as arguments.'
      }, {
        component: 'ListItem',
        name: 'onTouchHold',
        type: 'Function',
        default: '() => {}',
        description: 'Called when hold view for 500ms.',
      }],
      refs: [],
    };
    return (
      <ComponentDocument {...props}>
        <div>
          <button
            onClick={() => {
              const newItems = this.state.items.concat();
              newItems.push(`Item ${newItems.length + 1}`);
              this.setState({
                items: newItems,
              });
            }}
            >Add item</button>
          <button
            onClick={() => {
              const newItems = this.state.items.concat();
              newItems.pop();
              this.setState({
                items: newItems,
              });
            }}
            >Remove item</button>
          <List>
            {this.state.items.map((item, index) => {
              return (
                <ListItem key={index}>
                  <div className="example-list-item-content">{item}</div>
                </ListItem>
              );
            })}
          </List>
        </div>
        <List
          onSort={(from, to) => {
            const newItems = this.state.sortableItems.concat();
            const tmpItem = newItems.splice(from, 1);
            newItems.splice(to, 0, tmpItem[0]);
            this.setState({
              sortableItems: newItems,
            });
          }}
          >
          {this.state.sortableItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <div className="example-list-item-content">{item}</div>
              </ListItem>
            );
          })}
        </List>
      </ComponentDocument>
    );
  }
}

