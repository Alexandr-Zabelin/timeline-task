import { getTypography } from './typography';

export const getTheme = (isMobile: boolean) => ({
  typography: getTypography(isMobile),
});
