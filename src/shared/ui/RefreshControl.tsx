import {styled} from '@fast-styles/react';
import {RefreshControl} from 'react-native';

const StyledRefreshControl = styled(RefreshControl, {
  attributes: {
    colors: ['#006A00'],
    tintColor: '#006A00',
    refreshing: false,
  },
});

export {StyledRefreshControl as RefreshControl};
