import React from 'react';
import {Icon} from '../../lib/icon';

export class ComponentDocument extends React.Component {
  render() {
    const props = this.props;

    return (
      <section id={props.id} className="component-block">
        <h2 className="component-block-title">{props.name}</h2>
        <p className="component-block-components-title">Components:</p>
        <ul className="component-block-components-list">
          {props.components.map((component, index) => <li key={index}>{component}</li>)}
        </ul>
        {props.codes.map((code, index) => {
          return (
            <div key={index}>
              <p>{code.description}</p>
              <section className="component-block-example">
                {(props.children.length) ? props.children[index] : props.children}
              </section>
              <pre>
                <code>{code.text.trim()}</code>
              </pre>
            </div>
          );
        })}
        <section className="component-block-properties">
          <h3 className="component-block-properties-title">Properties</h3>
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
              {props.properties.map((property, index) => {
                return (
                  <tr key={index}>
                    <td>{property.component}</td>
                    <td>{property.name}</td>
                    <td>{property.type}</td>
                    <td>{property.default}</td>
                    <td>{property.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ul>{
            props.refs.map((ref, index) => {
              return <li key={index}>Ref: <a href={ref} target='_blank'>{ref}</a></li>;
            })
          }</ul>
        </section>
      </section>
    );
  }
}
