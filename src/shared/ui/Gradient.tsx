import Svg, {LinearGradient, Rect, Stop} from 'react-native-svg';
import {styled} from '@fast-styles/react';
import {
  Falsy,
  RecursiveArray,
  RegisteredStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {StyleProperties} from '@fast-styles/react/lib/typescript/types';

export const Gradient: React.FunctionComponent<GradientProps> = ({
  horizontal = false,
  config,
  style,
}) => {
  const GradientComponent = horizontal ? HorizontalGradient : VericalGradient;
  const GradientColors = renderGradient(config);

  return (
    <Container style={style}>
      <SvgContainer>
        <GradientComponent>{GradientColors}</GradientComponent>
        <GradientRect />
      </SvgContainer>
    </Container>
  );
};

Gradient.whyDidYouRender = true;
Gradient.displayName = 'Gradient';

interface GradientProps {
  config: GradientConfig;
  horizontal?: boolean;
  style?:
    | (false & StyleProperties)
    | (ViewStyle & StyleProperties)
    | (RegisteredStyle<ViewStyle> & StyleProperties)
    | (RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> &
        StyleProperties)
    | (null & StyleProperties)
    | undefined;
}

export type GradientConfig = GradientStop[];

interface GradientStop {
  color: string;
  offset: string | number;
  opacity?: number;
}

const renderGradient = (config: GradientConfig) =>
  config.map(({opacity, offset, color}) => (
    <Stop
      key={`GradientStop-${offset}-${color}-${opacity}`}
      offset={offset}
      stopColor={color}
      stopOpacity={opacity}
    />
  ));

const Container = styled(View, {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
});

const SvgContainer = styled(Svg, {
  flex: 1,
});

const GRADIENT_ID = 'gradient';

const VericalGradient = styled(LinearGradient, {
  attributes: {
    x1: '50%',
    x2: '50%',
    y1: '0%',
    y2: '100%',
    id: GRADIENT_ID,
  },
});

const HorizontalGradient = styled(LinearGradient, {
  attributes: {
    x1: '0%',
    x2: '100%',
    y1: '50%',
    y2: '50%',
    id: GRADIENT_ID,
  },
});

const GradientRect = styled(Rect, {
  attributes: {
    height: '100%',
    width: '100%',
    fill: `url(#${GRADIENT_ID})`,
  },
});
