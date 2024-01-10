import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';

export const TestScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FAFAFA'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#0A0A0A', fontSize: 24}}>Test screen</Text>
      </View>
    </SafeAreaView>
  );
};
