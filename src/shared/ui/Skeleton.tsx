import {styled} from '@fast-styles/react';
import {
  Falsy,
  RecursiveArray,
  RegisteredStyle,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import {Gradient, GradientConfig} from './Gradient.tsx';
import {MotiView} from 'moti';
import React from 'react';
import {StyleProperties} from '@fast-styles/react/lib/typescript/types';
import {useLayout} from './useLayout.ts';

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({style}) => {
  const {width: windowWidth} = useWindowDimensions();
  const {onLayoutChange, x} = useLayout();

  return (
    <Container style={style} onLayout={onLayoutChange}>
      <AnimatedView
        from={{translateX: -x - windowWidth}}
        animate={{translateX: windowWidth - x}}>
        <Gradient
          config={skeletonGradientConfig}
          horizontal
          style={{width: windowWidth}}
        />
      </AnimatedView>
    </Container>
  );
};

interface SkeletonProps {
  style:
    | (false & StyleProperties)
    | (ViewStyle & StyleProperties)
    | (RegisteredStyle<ViewStyle> & StyleProperties)
    | (RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> &
        StyleProperties)
    | (null & StyleProperties)
    | undefined;
  width?: number | string;
  height?: number | string;
  aspectRatio?: number;
}

const Container = styled(View, {
  backgroundColor: '#6F6F6F',
  overflow: 'hidden',
  borderRadius: 12,
});

const skeletonGradientConfig: GradientConfig = [
  {
    offset: '0%',
    color: '#BABABA',
    opacity: 0,
  },
  {
    offset: '50%',
    color: '#BABABA',
    opacity: 0.7,
  },
  {
    offset: '100%',
    color: '#BABABA',
    opacity: 0,
  },
];

const AnimatedView = styled(MotiView, {
  flex: 1,
  attributes: {
    transition: {
      loop: true,
      type: 'timing',
      duration: 2000,
      delay: 500,
      repeatReverse: false,
    },
  },
});
