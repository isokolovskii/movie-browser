import React from 'react';
import * as molecules from '../molecules';
import * as atoms from '../atoms';

interface MoviePreviewProps {
  title: string;
  rating: number;
  voteCount: number;
  onPress: (item: Omit<MoviePreviewProps, 'onPress' | 'loading'>) => void;
}

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
    <atoms.Container onPress={handlePress}>
      <atoms.Poster />
      <molecules.Rating {...{rating, voteCount}} />
      <atoms.Title>{title}</atoms.Title>
    </atoms.Container>
  );
};

MoviePreview.whyDidYouRender = false;
MoviePreview.displayName = 'MoviePreview';

export const MoviePreviewSkeleton = () => {
  return (
    <atoms.ContainerSkeleton>
      <atoms.PosterSkeleton />
      <molecules.RatingSkeleton />
      <atoms.TitleSkeleton />
    </atoms.ContainerSkeleton>
  );
};
