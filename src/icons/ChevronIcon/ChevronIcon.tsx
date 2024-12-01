import { FC } from 'react';

import { Svg } from './styled';
import { ChevronIconProps } from './types';

export const ChevronIcon: FC<ChevronIconProps> = ({
  width,
  height,
  color,
  direction,
  className,
}) => (
  <Svg
    $direction={direction}
    width={width}
    height={height}
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    vectorEffect="non-scaling-stroke"
    className={className}
  >
    <path d="M1 1L6 6L1 11" stroke={color} strokeWidth={2} />
  </Svg>
);
