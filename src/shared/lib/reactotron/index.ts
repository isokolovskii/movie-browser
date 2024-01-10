/// <reference types="reactotron-react-native" />
/// <reference types="reactotron-apisauce" />

if (__DEV__) {
  const Reactotron = require('reactotron-react-native');
  const apisaucePlugin = require('reactotron-apisauce');

  Reactotron.configure({}).useReactNative().use(apisaucePlugin()).connect();
}
