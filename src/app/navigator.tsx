import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TestScreen} from '../screens/TestScreen.tsx';
import React from 'react';

const TestStack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <TestStack.Navigator>
        <TestStack.Screen name={'TestScreen'} component={TestScreen} />
      </TestStack.Navigator>
    </NavigationContainer>
  );
};
