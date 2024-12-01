import { ANIMATIONS as CIRCLE_ANIMATIONS } from '../PeriodPoints';

// 20% времени ничего не показываем, 40% и 40% проводим transition в каждую из сторон
const durationRatio = CIRCLE_ANIMATIONS.circleRotation.duration / 5;
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
