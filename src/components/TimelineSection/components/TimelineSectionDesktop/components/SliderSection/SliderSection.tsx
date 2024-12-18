import { FC, useMemo } from 'react';

import { Slider } from '@components/Slider';
import { Slide, usePeriod } from '@components/TimelineSection/shared';

import { SliderSectionProps } from './types';
import { ANIMATIONS, MAX_WIDTH, SLIDES_GAP } from './constants';

export const SliderSection: FC<SliderSectionProps> = ({ data, className }) => {
  const { containerRef, periodData } = usePeriod({
    data,
    animations: ANIMATIONS,
  });

  const slides = useMemo(
    () =>
      periodData.details.map(detail => ({
        id: detail.id,
        Component: <Slide detail={detail} maxWidth={MAX_WIDTH} />,
      })),
    [periodData.details],
  );

  return (
    <div className={className} ref={containerRef}>
      {/* 
          TODO: подумать, как разрулить это более изящным способом

          с помощью key сбрасываем состояние слайдера при смене данных
          иначе слайдер может остаться на слайде x, а для новых данных общее число слайдов < x
      */}
      <Slider
        slidesGap={SLIDES_GAP}
        slides={slides}
        hasButtons
        key={periodData.id}
      />
    </div>
  );
};
