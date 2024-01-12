import type {MovieDto} from '../api/MovieDto.ts';

export interface MovieModel {
  title: string;
  rating: number;
  voteCount: number;
}

export const transformer = (dto: MovieDto): MovieModel => ({
  title: dto.title,
  rating: dto.vote_average,
  voteCount: dto.vote_count,
});
