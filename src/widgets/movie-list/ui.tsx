import {styled} from '@fast-styles/react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {MoviePreview} from '../../features/movie-preview/ui.tsx';
import React from 'react';
import {type RefreshControlProps, View} from 'react-native';

export const MovieList: React.FunctionComponent<ListProps> = ({
  data,
  onItemPress,
  refreshControl,
}) => {
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
