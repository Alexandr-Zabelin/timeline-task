import { DESKTOP_TYPOGRAPHY, MOBILE_TYPOGRAPHY } from './constants';

export const getTypography = (isMobile: boolean) =>
  isMobile ? MOBILE_TYPOGRAPHY : DESKTOP_TYPOGRAPHY;
