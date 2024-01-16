import {styled} from '@fast-styles/react';
import {View} from 'react-native';
import {Skeleton} from '../../../../shared/ui';

export const Poster = styled(View, {
  width: '100%',
  aspectRatio: 0.5,
  backgroundColor: '#FAFAFA',
});

export const PosterSkeleton = styled(Skeleton, {
  width: '100%',
  aspectRatio: 0.5,
});
