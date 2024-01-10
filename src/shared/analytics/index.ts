import AppMetrica from 'react-native-appmetrica';

const init = (apiKey: string) => {
  AppMetrica.activate({
    apiKey: apiKey,
  });
};

export const analytics = {
  init,
};
