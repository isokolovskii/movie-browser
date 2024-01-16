import {styled} from '@fast-styles/react';
import {Pressable, View} from 'react-native';

export const Container = styled(Pressable, {
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: 'center',
});

export const ContainerSkeleton = styled(View, {
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: 'center',
  width: '50%',
});

export const RatingContainer = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 8,
  width: '100%',
});
