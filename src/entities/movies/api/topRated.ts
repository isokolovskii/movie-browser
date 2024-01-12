import {type ApiTypes, httpClient} from '../../../shared/api';
import {type MovieDto, movieValidator} from './MovieDto.ts';
import {MOVIES_ENDPOINTS} from './endpoints.ts';
import {moviesModel} from '../model';

interface TopRatedMoviesReqiest
  extends ApiTypes.LanguageRequestParams,
    ApiTypes.PaginatedRequestParams,
    ApiTypes.RegionRequestParams {}

export const topRated = httpClient.generateRequestor<
  TopRatedMoviesReqiest,
  ApiTypes.PaginatedResponse<MovieDto[]>,
  ApiTypes.ApiErrorResponse,
  ApiTypes.PaginatedResponse<moviesModel.MovieModel[]>
>({
  method: 'get',
  url: MOVIES_ENDPOINTS.topRated,
  responseValidator: httpClient.validators.paginatedValidator(movieValidator),
});
