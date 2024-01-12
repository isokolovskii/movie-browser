import {styled} from '@fast-styles/react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {MoviePreview} from '../../features/movie-preview/ui.tsx';
import React from 'react';

export const MovieList: React.FunctionComponent<ListProps> = ({
  data,
  onItemPress,
}) => {
  return <List renderItem={renderItem(onItemPress)} data={data} />;
};

MovieList.whyDidYouRender = true;
MovieList.displayName = 'MovieList';

interface ListProps {
  data: ListItemProps[];
  onItemPress: (data: ListItemProps) => void;
}

type ListItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof MoviePreview>,
  'onPress'
>;

const List = styled(FlashList<ListItemProps>, {
  flex: 1,
  paddingHorizontal: 20,
  attributes: {
    numColumns: 2,
    renderItem: () => null,
    data: [],
  },
});

const renderItem =
  (onPress: ListProps['onItemPress']): ListRenderItem<ListItemProps> =>
  ({item}) =>
    <ListItem {...item} onPress={onPress} />;

const ListItem = styled(MoviePreview, {
  flex: 1,
});
