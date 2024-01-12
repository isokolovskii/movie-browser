import {styled} from '@fast-styles/react';
import {Pressable, Text, View} from 'react-native';
import React from 'react';

export const MoviePreview: React.FC<MoviePreviewProps> = ({
  title,
  rating,
  voteCount,
  onPress,
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
      <Title>{title}</Title>
    </Container>
  );
};

MoviePreview.whyDidYouRender = false;
MoviePreview.displayName = 'MoviePreview';

interface MoviePreviewProps {
  title: string;
  rating: number;
  voteCount: number;
  onPress: (item: Omit<MoviePreviewProps, 'onPress'>) => void;
}

const Container = styled(Pressable, {
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: 'center',
});

const Poster = styled(View, {
  width: '100%',
  aspectRatio: 0.5,
  backgroundColor: '#FAFAFA',
});

const Title = styled(Text, {
  fontSize: 16,
  color: '#0F0F0F',
  marginTop: 16,
  textAlign: 'center',
  lineHeight: 24,
  height: 48,
  attributes: {
    numberOfLines: 2,
  },
});

const RatingContainer = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 8,
  width: '100%',
});

const Rating = styled(Text, {
  fontSize: 12,
  color: '#505050',
});

const VoteCount = styled(Text, {
  fontSize: 12,
  color: '#9F9F9F',
});
