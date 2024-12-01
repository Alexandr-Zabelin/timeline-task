import styled from 'styled-components';

import { SvgProps } from './types';
import { DIRECTIONS, QUARTER_RADIAN } from './constants';

export const Svg = styled('svg')<StyledProps<SvgProps>>(({ $direction }) => ({
  transform: `rotate(${DIRECTIONS.indexOf($direction) * QUARTER_RADIAN}deg)`,
}));
