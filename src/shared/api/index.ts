import {createHttpClient} from '../lib/http';
import Config from 'react-native-config';

export const httpClient = createHttpClient({
  baseUrl: Config.TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${Config.TMDB_API_KEY}`,
    Accept: 'application/json',
  },
});
