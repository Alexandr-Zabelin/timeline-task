import { PeriodData } from '@components/TimelineSection/types';

interface DisappearConfig {
  duration: number;
}

interface AnimationConfig {
  disappear: DisappearConfig;
  appear: DisappearConfig & {
    delay: number;
  };
}

export interface UsePeriodParams {
  data: PeriodData;
  animations: AnimationConfig;
}
