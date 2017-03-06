import React from 'react';
import {ComponentDocument} from './component-document';
import {Icon} from '../../lib/icon';

export class IconDocument extends React.Component {
  render() {
    const props = {
      id: 'icon',
      name: 'Icon',
      codes: [{
        description: '',
        text: '<Icon fontSize="2rem">delete</Icon>',
      }],
      components: ['Icon'],
      properties: [{
        component: 'Icon',
        name: 'fontSize',
        type: 'String',
        default: '',
        description: 'Specify css font-size',
      }],
      refs: [
        'https://material.io/icons/',
      ],
    };
    return (
      <ComponentDocument {...props}><Icon fontSize='2rem'>delete</Icon></ComponentDocument>
    );
  }
}
