import { FC, useMemo } from 'react';

import { Slider } from '@components/Slider';
import { Slide, usePeriod } from '@components/TimelineSection/shared';

import { SwitchableSectionProps } from './types';
import { SliderWrapper, Title } from './styled';
import { ANIMATIONS, MAX_WIDTH, SLIDES_GAP } from './constants';

export const SwitchableSection: FC<SwitchableSectionProps> = ({ data }) => {
  const { containerRef, periodData } = usePeriod({
    data,
    animations: ANIMATIONS,
  });

  const { title } = periodData;

  const slides = useMemo(
    () =>
      periodData.details.map(detail => ({
        id: detail.id,
        Component: <Slide detail={detail} maxWidth={MAX_WIDTH} />,
      })),
    [periodData.details],
  );

  return (
    <div ref={containerRef}>
      <Title>{title}</Title>
      <SliderWrapper>
        {/* 
          TODO: подумать, как разрулить это более изящным способом

          с помощью key сбрасываем состояние слайдера при смене данных
          иначе слайдер может остаться на слайде x, а для новых данных общее число слайдов < x
      */}
        <Slider slidesGap={SLIDES_GAP} slides={slides} key={periodData.id} />
      </SliderWrapper>
    </div>
  );
};
