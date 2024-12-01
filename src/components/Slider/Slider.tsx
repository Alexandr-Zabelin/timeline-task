import 'swiper/css';
import { FC } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

import './styles.scss';
import { SliderProps } from './types';
import { NEXT_BUTTON_CONFIG, PREV_BUTTON_CONFIG } from './constants';
import { useSlider } from './utils';
import { NextButton, PrevButton, SliderWrapper } from './styled';

export const Slider: FC<SliderProps> = ({
  slides,
  hasButtons,
  slidesGap,
  className,
}) => {
  const {
    controller,
    isPrevButtonVisible,
    isNextButtonVisible,
    onPrevButtonClick,
    onNextButtonClick,
    onSwiper,
    onProgress,
  } = useSlider({ hasButtons });

  return (
    <SliderWrapper className={className}>
      {isPrevButtonVisible && (
        <PrevButton {...PREV_BUTTON_CONFIG} onClick={onPrevButtonClick} />
      )}
      <SwiperComponent
        onProgress={onProgress}
        modules={[Controller]}
        spaceBetween={slidesGap}
        controller={controller}
        slidesPerView="auto"
        onSwiper={onSwiper}
      >
        {slides.map(({ Component, id }) => (
          <SwiperSlide key={id}>{Component}</SwiperSlide>
        ))}
      </SwiperComponent>
      {isNextButtonVisible && (
        <NextButton {...NEXT_BUTTON_CONFIG} onClick={onNextButtonClick} />
      )}
    </SliderWrapper>
  );
};
