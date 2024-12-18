import { FC, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { getTheme } from '@theme';
import { useScreenWidth } from '@hooks/useScreenWidth';

import { AppContextProvider, AppContextData } from './context';
import { AppWrapper, GlobalStyles, TimelineSection } from './styled';
import { timelineSectionMockData } from './mocks';

export const App: FC = () => {
  const { isMobile } = useScreenWidth();

  const theme = useMemo(() => getTheme(isMobile), [isMobile]);
  const appContextValue: AppContextData = useMemo(
    () => ({ env: { isMobile } }),
    [isMobile],
  );

  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider value={appContextValue}>
        <GlobalStyles />
        <AppWrapper $isMobile={isMobile}>
          {/* для примера использовал моковые данные */}
          <TimelineSection data={timelineSectionMockData} isMobile={isMobile} />
          {/* для проверки работы сразу нескольких экземпляров компонента на странице */}
          <TimelineSection data={timelineSectionMockData} isMobile={isMobile} />
        </AppWrapper>
      </AppContextProvider>
    </ThemeProvider>
  );
};
