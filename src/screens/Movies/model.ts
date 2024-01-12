import {moviesApi} from '../../entities/movies/api';
import {createGate} from 'effector-react';
import {createEvent, sample} from 'effector';

const {
  $data: $movies,
  $refreshing,
  $pending,
  $isNetworkError,
  $isConnectionError,
  $isServerError,
  $serverError,
  startRequest,
  startRefresh: refresh,
  $validationError,
  $isValidationError,
} = moviesApi.getPopularFilms;

export const moviesScreenGate = createGate();

moviesScreenGate.status.watch(opened => {
  if (opened) {
    startRequest({});
  }
});

export {
  $movies,
  $pending,
  $refreshing,
  $serverError,
  $isServerError,
  $isConnectionError,
  $isNetworkError,
  refresh,
  $isValidationError,
  $validationError,
};
