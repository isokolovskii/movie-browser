import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {navigationModel} from '../../entities/navigation/model';
import React from 'react';
import {reflect} from '@effector/reflect';
import {MovieList} from '../../widgets/movie-list/ui.tsx';
import {$movies, moviesScreenGate, $refreshing, refresh} from './model.ts';
import {useGate} from 'effector-react';
import {RefreshControl} from '../../shared/ui';

type MoviesScreenProps = NativeStackScreenProps<
  navigationModel.RootStackParamList,
  navigationModel.Screens.Movies
>;

export const MoviesScreen: React.FunctionComponent<
  MoviesScreenProps
> = ({}) => {
  useGate(moviesScreenGate);

  return <PopularMoviesList onItemPress={console.log} />;
};

MoviesScreen.whyDidYouRender = false;
MoviesScreen.displayName = 'MoviesScreen';

const ListRefreshControl = reflect({
  view: RefreshControl,
  bind: {
    refreshing: $refreshing,
    onRefresh: refresh,
  },
});

const PopularMoviesList = reflect({
  view: MovieList,
  bind: {
    data: $movies.map(res => {
      if (!res) {
        return [];
      }

      return res.results.map(({title, vote_average, vote_count}) => ({
        title,
        rating: vote_average,
        voteCount: vote_count,
      }));
    }),
    refreshControl: <ListRefreshControl />,
  },
});
