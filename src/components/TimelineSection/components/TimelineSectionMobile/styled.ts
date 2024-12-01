import styled from 'styled-components';

import { PeriodSwitcher as PeriodSwitcherComponent } from './components';

export const Title = styled('h2')(({ theme: { typography } }) => ({
  color: '#42567A',
  maxWidth: 150,
  ...typography.h2Bold,
}));

export const MainTextWrapper = styled('div')({
  margin: '56px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 30,
});

export const PeriodSwitcher = styled(PeriodSwitcherComponent)({
  marginTop: 80,
});
