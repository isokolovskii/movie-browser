import React from 'react';
import {Navigator} from './navigator.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Navigator />
    </GestureHandlerRootView>
  );
};
