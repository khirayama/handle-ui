import React from 'react';
import {Icon} from '../../lib/icon';

export class IconComponentDocument extends React.Component {
  render() {
    return (
      <section id="icon" className="component-block">
        <h2 className="component-block-title">Icon</h2>
        <section className="component-block-example">
          <Icon fontSize='2rem'>delete</Icon>
        </section>
        <pre>
          <code>{`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`}</code>
        </pre>
        <pre>
          <code>{`<Icon fontSize='2rem'>delete</Icon>`}</code>
        </pre>
        <section className="component-block-properties">
          <h3 className="component-block-properties-title">Properties</h3>
          <p className="component-block-components-title">Components:</p>
          <ul className="component-block-components-list">
            <li>Icon</li>
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
                <td>Icon</td>
                <td>fontSize</td>
                <td>String</td>
                <td></td>
                <td>Specify css font-size</td>
              </tr>
            </tbody>
          </table>
          <p>Ref: <a href="https://material.io/icons/" target="_blank">https://material.io/icons/</a></p>
        </section>
      </section>
    );
  }
}
