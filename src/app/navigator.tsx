import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TestScreen} from '../screens/TestScreen.tsx';
import React from 'react';
import {SentryRoutingInstrumentation} from './sentry.ts';

const TestStack = createNativeStackNavigator();

export const Navigator = () => {
  const navigationRef = React.useRef<typeof NavigationContainer>();

  const onReady = () => {
    SentryRoutingInstrumentation.registerNavigationContainer(navigationRef);
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
      <TestStack.Navigator>
        <TestStack.Screen name={'TestScreen'} component={TestScreen} />
      </TestStack.Navigator>
    </NavigationContainer>
  );
};
