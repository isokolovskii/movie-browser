import {useCallback, useState} from 'react';
import {type LayoutChangeEvent, LayoutRectangle} from 'react-native';

export const useLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    y: 0,
    x: 0,
  });

  const onLayoutChange = useCallback(
    ({nativeEvent: {layout: nextLayout}}: LayoutChangeEvent) => {
      setLayout(nextLayout);
    },
    [],
  );

  return {
    ...layout,
    onLayoutChange,
  };
};
