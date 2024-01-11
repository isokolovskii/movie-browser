declare module 'react-native-config' {
  export interface NativeConfig {
    YANDEX_APPMETRICA_API_KEY: string;
    TMDB_API_KEY: string;
    TMDB_BASE_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
