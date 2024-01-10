import Reactotron from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';

Reactotron.configure({}).useReactNative().use(apisaucePlugin()).connect();
