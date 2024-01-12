import {type ApiTypes, httpClient} from '../../../shared/api';
import {type MovieDto, movieValidator} from './MovieDto.ts';
import {MOVIES_ENDPOINTS} from './endpoints.ts';

interface TopRatedMoviesReqiest
  extends ApiTypes.LanguageRequestParams,
    ApiTypes.PaginatedRequestParams,
    ApiTypes.RegionRequestParams {}

export const topRated = httpClient.generateRequestor<
  TopRatedMoviesReqiest,
  ApiTypes.PaginatedResponse<MovieDto[]>,
  ApiTypes.ApiErrorResponse
>({
  method: 'get',
  url: MOVIES_ENDPOINTS.topRated,
  responseValidator: {
    validator: httpClient.validators.paginatedValidator(movieValidator),
    onValidationError: console.error,
  },
});
