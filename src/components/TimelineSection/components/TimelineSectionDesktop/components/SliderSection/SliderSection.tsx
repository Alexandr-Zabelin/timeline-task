import { FC, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';

import { Slider } from '@components/Slider';

import { Slide } from './Slide';
import { SliderSectionProps } from './types';
import { ANIMATIONS } from './constants';

export const SliderSection: FC<SliderSectionProps> = ({ data, className }) => {
  const [detailsData, setDetailsData] = useState(data);
  const containerRef = useRef(null);

  // На каждое обновление передаваемой data запускаем fade-in-out эффект:
  // Зануляем opacity
  // Оновляем данные для отображения
  // Возвращаем исходный opacity
  useEffect(() => {
    // запускаем переходы только при смене данных
    if (detailsData.id === data.id) {
      return;
    }

    const tl = gsap.timeline();

    tl.to(containerRef.current, {
      opacity: 0,
      duration: ANIMATIONS.disappear.duration,
      ease: 'power3.out',
      onComplete: () => setDetailsData(data),
    }).to(containerRef.current, {
      delay: ANIMATIONS.appear.delay,
      opacity: 1,
      ease: 'power3.in',
      duration: ANIMATIONS.appear.duration,
    });
  }, [data]);

  const slides = useMemo(
    () =>
      detailsData.details.map(detail => ({
        id: detail.id,
        Component: <Slide detail={detail} />,
      })),
    [detailsData.details],
  );

  return (
    <div className={className} ref={containerRef}>
      {/* 
          TODO: подумать, как разрулить это более изящным способом

          с помощью key сбрасываем состояние слайдера при смене данных
          иначе слайдер может остаться на слайде x, а для новых данных общее число слайдов < x
      */}
      <Slider slidesGap={80} slides={slides} hasButtons key={detailsData.id} />
    </div>
  );
};
