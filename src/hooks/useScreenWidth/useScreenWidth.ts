import { useEffect, useState } from 'react';

import { MOBILE_SCREEN_WIDTH } from './constants';

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return {
    screenWidth,
    isMobile: screenWidth <= MOBILE_SCREEN_WIDTH,
  };
};
