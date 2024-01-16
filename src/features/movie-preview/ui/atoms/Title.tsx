import {styled} from '@fast-styles/react';
import {Text, View} from 'react-native';
import {Skeleton} from '../../../../shared/ui';
import React from 'react';

const TitleText = styled(Text, {
  fontSize: 16,
  color: '#0F0F0F',
  textAlign: 'center',
  lineHeight: 24,
  height: 48,
  attributes: {
    numberOfLines: 2,
  },
});

const TitleContainer = styled(View, {
  width: '100%',
  marginTop: 16,
  marginBottom: 8,
});

const TitleLineSkeleton = styled(Skeleton, {
  width: '100%',
  height: 20,
  marginVertical: 2,
});

export const Title: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <TitleContainer>
      <TitleText>{children}</TitleText>
    </TitleContainer>
  );
};

export const TitleSkeleton = () => {
  return (
    <TitleContainer>
      <TitleLineSkeleton />
      <TitleLineSkeleton />
    </TitleContainer>
  );
};
