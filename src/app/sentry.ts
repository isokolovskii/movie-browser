import {init} from '@sentry/react-native';
import {SentryTracing} from '../shared/sentry';

init({
  dsn: 'https://7d54df006c53988ced09689720427304@o4506546097881088.ingest.sentry.io/4506546099257344',
  integrations: [SentryTracing],
  autoSessionTracking: true,
});
