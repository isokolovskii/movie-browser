import {styled} from '@fast-styles/react';
import {Text} from 'react-native';
import {Skeleton} from '../../../../shared/ui';

export const VoteCount = styled(Text, {
  fontSize: 12,
  lineHeight: 18,
  color: '#9F9F9F',
});

export const VoteCountSkeleton = styled(Skeleton, {
  height: 18,
  width: '25%',
});
