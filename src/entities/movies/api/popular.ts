import {type ApiTypes, httpClient} from '../../../shared/api';
import {type MovieDto, movieValidator} from './MovieDto.ts';
import {MOVIES_ENDPOINTS} from './endpoints.ts';

interface PopularMoviesRequest
  extends ApiTypes.LanguageRequestParams,
    ApiTypes.PaginatedRequestParams,
    ApiTypes.RegionRequestParams {}

export const getPopularFilms = httpClient.generateRequestor<
  PopularMoviesRequest,
  ApiTypes.PaginatedResponse<MovieDto[]>,
  ApiTypes.ApiErrorResponse
>({
  method: 'get',
  url: MOVIES_ENDPOINTS.popular,
  responseValidator: {
    validator: httpClient.validators.paginatedValidator(movieValidator),
    onValidationError: console.error,
  },
});
