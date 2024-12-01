import { ReactNode } from 'react';

import { UseSliderParams } from './utils';

interface SlideData {
  id: string;
  Component: ReactNode;
}

export interface SliderProps extends UseSliderParams {
  slides: SlideData[];
  slidesGap: number;
  className?: string;
}
