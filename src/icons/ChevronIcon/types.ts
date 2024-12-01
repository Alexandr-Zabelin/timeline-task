import { DIRECTIONS } from './constants';

type Direction = (typeof DIRECTIONS)[number];

export type SvgProps = Pick<ChevronIconProps, 'direction'>;

export interface ChevronIconProps {
  height: number;
  width: number;
  color: string;
  direction: Direction;
  className?: string;
}
