import styled, { createGlobalStyle } from 'styled-components';

import { TimelineSection as TimelineSectionComponent } from '@components/TimelineSection';

import { AppWrapperProps } from './types';

export const GlobalStyles = createGlobalStyle`
html,
body,
button,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
  border: 0;
}

* {
  box-sizing: border-box;
}

`;

export const AppWrapper = styled('div')<StyledProps<AppWrapperProps>>(
  ({ $isMobile }) => ({
    backgroundColor: '#F4F5F9',
    padding: $isMobile ? 20 : '10px 100px',
    minHeight: $isMobile ? '100vh' : 'auto',
  }),
);

export const TimelineSection = styled(TimelineSectionComponent)({
  '&:not(:first-child)': {
    marginTop: 120,
  },
});
