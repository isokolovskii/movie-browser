import {type ApiTypes, httpClient} from '../../../shared/api';
import {type MovieDto, movieValidator} from './MovieDto.ts';
import {MOVIES_ENDPOINTS} from './endpoints.ts';
import {type moviesModel} from '../model';

interface PopularMoviesRequest
  extends ApiTypes.LanguageRequestParams,
    ApiTypes.PaginatedRequestParams,
    ApiTypes.RegionRequestParams {}

export const getPopularFilms = httpClient.generateRequestor<
  PopularMoviesRequest,
  ApiTypes.PaginatedResponse<MovieDto[]>,
  ApiTypes.ApiErrorResponse,
  ApiTypes.PaginatedResponse<moviesModel.MovieModel[]>
>({
  method: 'get',
  url: MOVIES_ENDPOINTS.popular,
  responseValidator: httpClient.validators.paginatedValidator(movieValidator),
});
