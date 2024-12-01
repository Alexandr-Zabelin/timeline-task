import { FC, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { getTheme } from '@theme';
import { useScreenWidth } from '@hooks/useScreenWidth';
import { TimelineSection } from '@components/TimelineSection';

import { AppContextProvider, AppContextData } from './context';
import { AppWrapper, GlobalStyles } from './styled';
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
        <AppWrapper>
          {/* для примера использовал моковые данные */}
          <TimelineSection data={timelineSectionMockData} isMobile={isMobile} />
        </AppWrapper>
      </AppContextProvider>
    </ThemeProvider>
  );
};
