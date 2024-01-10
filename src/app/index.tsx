import React from 'react';
import {Navigator} from './navigator.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styled} from '@fast-styles/react';

const GestureHandlerWrapper = styled(GestureHandlerRootView, {
  flex: 1,
});

export const App = () => {
  return (
    <GestureHandlerWrapper>
      <Navigator />
    </GestureHandlerWrapper>
  );
};
