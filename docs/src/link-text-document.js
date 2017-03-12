import React from 'react';
import {ComponentDocument} from './component-document';
import {
  LinkText,
} from '../../lib/link-text';

export class LinkTextDocument extends React.Component {
  render() {
    const props = {
      id: 'link-text',
      name: 'Link Text',
      codes: [{
        description: 'LinkText',
        text: '<LinkText>Handle-UI linkt is https://khirayama.github.io/handle-ui/</LinkText>',
      }],
      components: ['LinkText'],
      properties: [],
      refs: [],
    };
    return (
      <ComponentDocument {...props}>
        <LinkText>Handle-UI linkt is https://khirayama.github.io/handle-ui/</LinkText>
      </ComponentDocument>
    );
  }
}
