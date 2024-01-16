import {styled} from '@fast-styles/react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {
  MoviePreview,
  MoviePreviewSkeleton,
} from '../../features/movie-preview/ui';
import React from 'react';
import {type RefreshControlProps, View} from 'react-native';

export const MovieList: React.FunctionComponent<ListProps> = ({
  data,
  onItemPress,
  refreshControl,
  loading,
}) => {
  if (loading) {
    return (
      <ListSkeleton>
        {[...new Array(6)].map(() => (
          <MoviePreviewSkeleton
            key={`MovieItemSkeleton-${Math.random() * 500}`}
          />
        ))}
      </ListSkeleton>
    );
  }

  return (
    <List
      renderItem={renderItem(onItemPress)}
      data={data}
      refreshControl={refreshControl}
    />
  );
};

MovieList.whyDidYouRender = false;
MovieList.displayName = 'MovieList';

interface ListProps {
  data: ListItemProps[] | null;
  onItemPress: (data: ListItemProps) => void;
  refreshControl?: React.ReactElement<
    RefreshControlProps,
    string | React.JSXElementConstructor<any>
  >;
  loading: boolean;
}

type ListItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof MoviePreview>,
  'onPress'
>;

const List = styled(FlashList<ListItemProps>, {
  attributes: {
    numColumns: 2,
    renderItem: () => null,
    data: [],
    keyExtractor: item => `Movie-${item.title}`,
    estimatedItemSize: 100,
    contentContainerStyle: {
      paddingVertical: 8,
      paddingHorizontal: 4,
    },
    ItemSeparatorComponent: () => <ListSpacer />,
  },
});

const ListSkeleton = styled(View, {
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingVertical: 8,
  paddingHorizontal: 4,
});

const renderItem =
  (onPress: ListProps['onItemPress']): ListRenderItem<ListItemProps> =>
  ({item}) =>
    <ListItem {...item} onPress={onPress} />;

const ListItem = styled(MoviePreview, {
  flex: 1,
  marginHorizontal: 8,
});

const ListSpacer = styled(View, {
  height: 10,
});
