import {
  init,
  ReactNativeTracing,
  ReactNavigationInstrumentation,
} from '@sentry/react-native';

const routingInstrumentation = new ReactNavigationInstrumentation();

init({
  dsn: 'https://7d54df006c53988ced09689720427304@o4506546097881088.ingest.sentry.io/4506546099257344',
  integrations: [new ReactNativeTracing(routingInstrumentation)],
  autoSessionTracking: true,
});

export {routingInstrumentation as SentryRoutingInstrumentation};
