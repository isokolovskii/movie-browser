import './sentry.ts';

import React from 'react';
import {Navigator} from './navigator.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styled} from '@fast-styles/react';
import {TouchEventBoundary, wrap} from '@sentry/react-native';

const GestureHandlerWrapper = styled(GestureHandlerRootView, {
  flex: 1,
});

const App = () => {
  return (
    <TouchEventBoundary>
      <GestureHandlerWrapper>
        <Navigator />
      </GestureHandlerWrapper>
    </TouchEventBoundary>
  );
};

export default wrap(App);
