import {analytics} from '../shared/lib/analytics';
import Config from 'react-native-config';

analytics.init(Config.YANDEX_APPMETRICA_API_KEY);
