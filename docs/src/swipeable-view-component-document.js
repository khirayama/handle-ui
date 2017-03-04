import React from 'react';
import {
  SwipeableView,
  SwipeableViewContent,
  SwipeableViewBackground,
} from '../../lib/swipeable-view';

export class SwipeableViewComponentDocument extends React.Component {
  render() {
    return (
      <section id="swipeable-view" className="component-block">
        <h2 className="component-block-title">Swipeable View</h2>
        <section className="component-block-example">
          <SwipeableView
            onSwipeLeft={() => console.log('on swipe left')}
            onSwipeRight={() => console.log('on swipe right')}
            throughLeft
            >
            <SwipeableViewBackground position="left"><span>L</span></SwipeableViewBackground>
            <SwipeableViewContent>Content</SwipeableViewContent>
            <SwipeableViewBackground position="right"><span>R</span></SwipeableViewBackground>
          </SwipeableView>
        </section>
        <pre>
          <code>
            {`<SwipeableView
  onSwipeLeft={() => console.log('on swipe left')}
  onSwipeRight={() => console.log('on swipe right')}
  throughLeft={true}
  >
  <SwipeableViewBackground position='left'><span>L</span></SwipeableViewBackground>
  <SwipeableViewContent>Content</SwipeableViewContent>
  <SwipeableViewBackground position='right'><span>R</span></SwipeableViewBackground>
</SwipeableView>`}
          </code>
        </pre>
        <section className="component-block-properties">
          <h3 className="component-block-properties-title">SwipeableView Properties</h3>
          <p className="component-block-components-title">Components:</p>
          <ul className="component-block-components-list">
            <li>SwipeableView</li>
            <li>SwipeableViewBackground</li>
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
            <tbody/>
          </table>
        </section>
      </section>
    );
  }
}
