import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styled} from '@fast-styles/react';

const SafeArea = styled(SafeAreaView, {
  backgroundColor: '#FAFAFA',
});

const Container = styled(View, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const TestText = styled(Text, {
  color: '#0A0A0A',
  fontSize: 24,
});

export const TestScreen = () => {
  return (
    <SafeArea>
      <Container>
        <TestText>Test screen</TestText>
      </Container>
    </SafeArea>
  );
};
