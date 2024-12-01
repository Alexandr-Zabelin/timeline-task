import { ANIMATIONS as CORE_ANIMATIONS } from '../../constants';

// 20% времени ничего не показываем, 40% и 40% проводим transition в каждую из сторон
const durationRatio = CORE_ANIMATIONS.number.duration / 5;
const delay = durationRatio;
const duration = durationRatio * 2;

export const ANIMATIONS = {
  disappear: {
    duration,
  },
  appear: {
    duration,
    delay,
  },
};

export const MAX_WIDTH = 180;
export const SLIDES_GAP = 25;
