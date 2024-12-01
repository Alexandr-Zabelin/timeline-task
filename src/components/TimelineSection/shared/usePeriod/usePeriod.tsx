import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import { UsePeriodParams } from './types';

export const usePeriod = ({ data, animations }: UsePeriodParams) => {
  const [periodData, setPeriodData] = useState(data);
  const containerRef = useRef(null);

  // На каждое обновление передаваемой data запускаем fade-in-out эффект:
  // Зануляем opacity
  // Оновляем данные для отображения
  // Возвращаем исходный opacity
  useEffect(() => {
    // запускаем переходы только при смене данных
    if (periodData.id === data.id || !containerRef.current) {
      return;
    }

    const tl = gsap.timeline();

    tl.to(containerRef.current, {
      opacity: 0,
      duration: animations.disappear.duration,
      ease: 'power3.out',
      onComplete: () => setPeriodData(data),
    }).to(containerRef.current, {
      delay: animations.appear.delay,
      opacity: 1,
      ease: 'power3.in',
      duration: animations.appear.duration,
    });
  }, [data]);

  return { containerRef, periodData };
};
