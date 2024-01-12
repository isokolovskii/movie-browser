import * as popularApi from './popular.ts';
import * as topRatedApi from './topRated.ts';
import * as moviesDtos from './types.ts';

export const moviesApi = {
  ...popularApi,
  ...topRatedApi,
};
export {moviesDtos};
