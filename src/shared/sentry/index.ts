import {
  ReactNativeTracing,
  ReactNavigationInstrumentation,
} from '@sentry/react-native';

export const SentryRoutingInstrumentation =
  new ReactNavigationInstrumentation();

export const SentryTracing = new ReactNativeTracing({
  routingInstrumentation: SentryRoutingInstrumentation,
});
