import React from 'react';
import * as atoms from '../atoms';

interface RatingProps {
  rating: number;
  voteCount: number;
}

export const Rating: React.FunctionComponent<RatingProps> = ({
  rating,
  voteCount,
}) => {
  return (
    <atoms.RatingContainer>
      <atoms.Rating>{rating.toFixed(2)}</atoms.Rating>
      <atoms.VoteCount>{voteCount}</atoms.VoteCount>
    </atoms.RatingContainer>
  );
};

Rating.whyDidYouRender = false;
Rating.displayName = 'MovieRating';

export const RatingSkeleton = () => {
  return (
    <atoms.RatingContainer>
      <atoms.RatingSkeleton />
      <atoms.VoteCountSkeleton />
    </atoms.RatingContainer>
  );
};
