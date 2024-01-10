import {
  NavigationContainer,
  type NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TestScreen} from '../screens/TestScreen.tsx';
import React from 'react';
import {SentryRoutingInstrumentation} from '../shared/sentry';

const TestStack = createNativeStackNavigator();

export const Navigator = () => {
  const navigationRef =
    React.useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null);

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
