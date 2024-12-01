import { Dispatch, SetStateAction } from 'react';

export interface PeriodSwitcherProps {
  currentPeriodIdx: number;
  periodsCount: number;
  onPeriodIdxChange: Dispatch<SetStateAction<number>>;
  className?: string;
}
