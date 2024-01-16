import {styled} from '@fast-styles/react';
import {Text} from 'react-native';
import {Skeleton} from '../../../../shared/ui';

export const Rating = styled(Text, {
  fontSize: 12,
  lineHeight: 18,
  color: '#505050',
});

export const RatingSkeleton = styled(Skeleton, {
  height: 18,
  width: '25%',
});
