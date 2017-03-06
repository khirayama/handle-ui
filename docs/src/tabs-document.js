import React from 'react';
import {ComponentDocument} from './component-document';
import {
  Tabs,
  TabList,
  TabListItem,
  TabContentList,
  TabContentListItem,
} from '../../lib/tabs';

export class TabsDocument extends React.Component {
  render() {
    const props = {
      id: 'tabs',
      name: 'Tabs',
      codes: [{
        description: '',
        text: `
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
`,
      }],
      components: ['Tabs', 'TabList', 'TabListItem', 'TabContentList', 'TabContentListItem'],
      properties: [{
        component: 'Tabs',
        name: 'index',
        type: 'Number',
        default: '0',
        description: 'Current tab index.',
      }, {
        component: 'TabListItem',
        name: 'index',
        type: 'Number',
        default: '0',
        description: 'Tab index',
      }, {
        component: 'TabListItem',
        name: 'onActive',
        type: 'Function',
        default: '() => {}',
        description: 'Called when the active this tab.',
      }, {
        component: 'TabContentListItem',
        name: 'index',
        type: 'Number',
        default: '0',
        description: 'Tab index',
      }],
      refs: [],
    };
    return (
      <ComponentDocument {...props}>
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
      </ComponentDocument>
    );
  }
}

