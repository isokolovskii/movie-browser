import {createHttpClient} from '../lib/http';
import Config from 'react-native-config';
import * as validators from './validators.ts';
import * as ApiTypes from './types.ts';

const client = createHttpClient({
  baseUrl: Config.TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${Config.TMDB_API_KEY}`,
    Accept: 'application/json',
  },
});

export const httpClient = {
  ...client,
  validators,
};

export {ApiTypes};
