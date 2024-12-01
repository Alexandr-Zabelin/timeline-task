import { FULL_CIRCLE_DEGREE } from '@utils/math/constants';

export const degreesToRadian = (degrees: number) =>
  degrees * ((2 * Math.PI) / FULL_CIRCLE_DEGREE);
