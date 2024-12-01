import styled from 'styled-components';

import horizontalLine from '@assets/images/horizontalLine.svg';
import verticalLines from '@assets/images/verticalLines.svg';
import circle from '@assets/images/circle.svg';

import {
  CIRCLE_SIZE,
  PeriodSwitcher as PeriodSwitcherComponent,
  SliderSection as SliderSectionComponent,
} from './components';

export const Wrapper = styled('section')({
  width: '100%',
  padding: '100px 0',
  // вертикальные линии
  backgroundImage: `url(${verticalLines})`,
  backgroundPosition: '0 0, center',
  backgroundRepeat: 'repeat-y, no-repeat',
  backgroundSize: '100%',
});

export const Title = styled('h2')(({ theme: { typography } }) => ({
  maxWidth: 350,
  paddingLeft: 78,
  borderLeft: '5px solid',
  borderImage: 'linear-gradient(180deg, #3877EE -5%, #EF5DA8 85%) 1',
  color: '#42567A',
  ...typography.h2Bold,
}));

export const CircleSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: CIRCLE_SIZE,
  // горизонтальная линия и окружность
  backgroundImage: `url(${horizontalLine}), url(${circle})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
});

export const MainTextWrapper = styled('div')({
  opacity: 0.85,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 66,
});

export const BottomSection = styled('div')({
  padding: '0 80px',
});

export const PeriodSwitcher = styled(PeriodSwitcherComponent)({
  // по макетам середина переключалок на одном уровне с нижней границей кругляша
  transform: 'translateY(-50%)',
  // чтобы не занимал больше ширины, чем нужно и не перекрывал кругляш
  display: 'inline-block',
});

export const SliderSection = styled(SliderSectionComponent)({
  marginTop: 50,
});
