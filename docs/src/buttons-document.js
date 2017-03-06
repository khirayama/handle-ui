import React from 'react';
import {ComponentDocument} from './component-document';
import {
  FlatButton,
  FloatingButton,
  IconButton,
} from '../../lib/buttons';

export class ButtonsDocument extends React.Component {
  render() {
    const props = {
      id: 'buttons',
      name: 'Buttons',
      codes: [{
        description: 'Flat button',
        text: '<FlatButton>MOVE OTHER PAGE</FlatButton>',
      }, {
        description: 'Floating button',
        text: '<FloatingButton>ADD TASK</FloatingButton>',
      }, {
        description: 'Icon button',
        text: '<IconButton>delete</IconButton>',
      }],
      components: ['FlatButton', 'FloatingButton', 'IconButton'],
      properties: [],
      refs: [],
    };
    return (
      <ComponentDocument {...props}>
        <FlatButton>MOVE OTHER PAGE</FlatButton>
        <FloatingButton>ADD TASK</FloatingButton>
        <IconButton>delete</IconButton>
      </ComponentDocument>
    );
  }
}
