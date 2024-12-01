import { useState } from 'react';
import { ControllerOptions, Swiper } from 'swiper/types';

import { UseSliderParams } from './types';

export const useSlider = ({ hasButtons }: UseSliderParams) => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [isSwiperAtStart, setIsSwiperAtStart] = useState(swiper?.isBeginning);
  const [isSwiperAtEnd, setIsSwiperAtEnd] = useState(swiper?.isEnd);

  const controller: ControllerOptions = { control: swiper };

  const isPrevButtonVisible = !isSwiperAtStart && hasButtons;
  const isNextButtonVisible = !isSwiperAtEnd && hasButtons;

  const onPrevButtonClick = () => swiper?.slidePrev();
  const onNextButtonClick = () => swiper?.slideNext();

  const onProgress = hasButtons
    ? ({ isBeginning, isEnd }: Swiper) => {
        setIsSwiperAtStart(isBeginning);
        setIsSwiperAtEnd(isEnd);
      }
    : undefined;

  return {
    onProgress,
    isPrevButtonVisible,
    isNextButtonVisible,
    onPrevButtonClick,
    onNextButtonClick,
    onSwiper: setSwiper,
    controller,
  };
};
