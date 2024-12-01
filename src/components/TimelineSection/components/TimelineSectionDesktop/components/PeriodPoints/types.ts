import { PeriodData } from '@components/TimelineSection/types';

export interface PeriodPointsWrapperProps {
  angle: number;
}

export interface PointWrapperProps extends PeriodPointsWrapperProps {
  x: number;
  y: number;
  isCurrent: boolean;
}

export interface PeriodPointsProps {
  periods: PeriodData[];
  currentPeriodIdx: number;
  onPointClick: (idx: number) => void;
}
