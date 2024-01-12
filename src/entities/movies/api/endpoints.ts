const BASE_MOVIES_ENDPOINT = '/movie';

export const MOVIES_ENDPOINTS = {
  popular: `${BASE_MOVIES_ENDPOINT}/popular`,
  topRated: `${BASE_MOVIES_ENDPOINT}/top_rated`,
} as const;
