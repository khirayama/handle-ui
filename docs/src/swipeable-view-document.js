import React from 'react';
import {ComponentDocument} from './component-document';
import {
  SwipeableView,
  SwipeableViewContent,
  SwipeableViewBackground,
} from '../../lib/swipeable-view';

export class SwipeableViewDocument extends React.Component {
  render() {
    const props = {
      id: 'swipeable-view',
      name: 'Swipeable View(touch device)',
      codes: [{
        description: '',
        text: `<SwipeableView
  onSwipeLeft={() => console.log('on swipe left')}
  onSwipeRight={() => console.log('on swipe right')}
  throughLeft={true}
  >
  <SwipeableViewBackground position='left'><span>L</span></SwipeableViewBackground>
  <SwipeableViewContent>Content</SwipeableViewContent>
  <SwipeableViewBackground position='right'><span>R</span></SwipeableViewBackground>
</SwipeableView>`,
      }],
      components: ['SwipeableView', 'SwipeableViewContent', 'SwipeableViewBackground'],
      properties: [{
        component: 'SwipeableView',
        name: 'onSwipeLeft',
        type: 'Function',
        default: '() => {}',
        description: 'Called when swipe or flick to left.',
      }, {
        component: 'SwipeableView',
        name: 'onSwipeRight',
        type: 'Function',
        default: '() => {}',
        description: 'Called when swipe or flick to right.',
      }, {
        component: 'SwipeableView',
        name: 'throughRight',
        type: 'Boolean',
        default: 'false',
        description: 'Move animation to through out content when call swipeLeft.',
      }, {
        component: 'SwipeableView',
        name: 'throughLeft',
        type: 'Boolean',
        default: 'false',
        description: 'Move animation to through out content when call swipeRight.',
      }],
      refs: [],
    };
    return (
      <ComponentDocument {...props}>
        <SwipeableView
          onSwipeLeft={() => console.log('on swipe left')}
          onSwipeRight={() => console.log('on swipe right')}
          throughLeft
          >
          <SwipeableViewBackground position="left"><span>L</span></SwipeableViewBackground>
          <SwipeableViewContent>Content</SwipeableViewContent>
          <SwipeableViewBackground position="right"><span>R</span></SwipeableViewBackground>
        </SwipeableView>
      </ComponentDocument>
    );
  }
}

