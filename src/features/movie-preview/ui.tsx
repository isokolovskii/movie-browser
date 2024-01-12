import {styled} from '@fast-styles/react';
import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {Skeleton} from '../../shared/ui';

export const MoviePreview: React.FC<MoviePreviewProps> = ({
  onPress,
  title,
  rating,
  voteCount,
}) => {
  const handlePress = () => {
    onPress({title, rating, voteCount});
  };

  return (
    <Container onPress={handlePress}>
      <Poster />
      <RatingContainer>
        <Rating>{rating.toFixed(2)}</Rating>
        <VoteCount>{voteCount}</VoteCount>
      </RatingContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
};

MoviePreview.whyDidYouRender = false;
MoviePreview.displayName = 'MoviePreview';

interface MoviePreviewProps {
  title: string;
  rating: number;
  voteCount: number;
  onPress: (item: Omit<MoviePreviewProps, 'onPress' | 'loading'>) => void;
}

export const MoviePreviewSkeleton = () => {
  return (
    <ContainerSkeleton>
      <PosterSkeleton />
      <RatingContainer>
        <RatingSkeleton />
        <VoteCountSkeleton />
      </RatingContainer>
      <TitleContainer>
        <TitleSkeleton />
        <TitleSkeleton />
      </TitleContainer>
    </ContainerSkeleton>
  );
};

const Container = styled(Pressable, {
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: 'center',
});

const ContainerSkeleton = styled(View, {
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: 'center',
  width: '50%',
});

const Poster = styled(View, {
  width: '100%',
  aspectRatio: 0.5,
  backgroundColor: '#FAFAFA',
});

const PosterSkeleton = styled(Skeleton, {
  width: '100%',
  aspectRatio: 0.5,
});

const Title = styled(Text, {
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

const TitleSkeleton = styled(Skeleton, {
  width: '100%',
  height: 20,
  marginVertical: 2,
});

const RatingContainer = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 8,
  width: '100%',
});

const Rating = styled(Text, {
  fontSize: 12,
  lineHeight: 18,
  color: '#505050',
});

const RatingSkeleton = styled(Skeleton, {
  height: 18,
  width: '25%',
});

const VoteCount = styled(Text, {
  fontSize: 12,
  lineHeight: 18,
  color: '#9F9F9F',
});

const VoteCountSkeleton = styled(Skeleton, {
  height: 18,
  width: '25%',
});
