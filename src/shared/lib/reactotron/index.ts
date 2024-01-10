/// <reference types="reactotron-react-native" />
/// <reference types="reactotron-apisauce" />

if (__DEV__) {
  const {
    default: Reactotron,
    trackGlobalErrors,
  } = require('reactotron-react-native');
  const {default: apisaucePlugin} = require('reactotron-apisauce');

  Reactotron.configure()
    .useReactNative()
    .use(trackGlobalErrors())
    .use(apisaucePlugin())
    .connect();
}
