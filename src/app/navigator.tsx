import {
  NavigationContainer,
  type NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SentryRoutingInstrumentation} from '../shared/lib/sentry';
import {navigationModel} from '../entities/navigation/model';
import {MoviesScreen} from '../screens/Movies/ui.tsx';

const TestStack =
  createNativeStackNavigator<navigationModel.RootStackParamList>();

export const Navigator = () => {
  const navigationRef =
    React.useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null);

  const onReady = () => {
    SentryRoutingInstrumentation.registerNavigationContainer(navigationRef);
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
      <TestStack.Navigator>
        <TestStack.Screen
          name={navigationModel.Screens.Movies}
          component={MoviesScreen}
        />
      </TestStack.Navigator>
    </NavigationContainer>
  );
};
