import styled, { StyledObject } from 'styled-components';

import { PeriodPointsWrapperProps, PointWrapperProps } from './types';
import {
  ANIMATIONS,
  CIRCLE_SIZE,
  POINT_CONCISE_SIZE,
  POINT_FULL_SIZE,
} from './constants';

export const PeriodPointsWrapper = styled('div')<
  StyledProps<PeriodPointsWrapperProps>
>(({ $angle }) => ({
  transition: `transform ${ANIMATIONS.circleRotation.duration}s ease-in-out`,
  width: CIRCLE_SIZE,
  height: CIRCLE_SIZE,
  position: 'absolute',
  // эффект прокрутки окружности
  transform: `rotate(${$angle}deg)`,
}));

export const Content = styled('span')(({ theme: { typography } }) => ({
  transition: `opacity ${ANIMATIONS.contentDisappear}s ease-in-out`,
  color: '#42567A',
  opacity: 0,
  ...typography.body2Regular,
}));

export const ConcisePoint = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: `all ${ANIMATIONS.buttonPaint.duration}s ease`,
  borderRadius: '50%',
  backgroundColor: '#42567A',
  width: POINT_CONCISE_SIZE,
  height: POINT_CONCISE_SIZE,
});

export const Title = styled('span')(({ theme: { typography } }) => ({
  position: 'absolute',
  // отступ от кнопки
  right: -15,
  transform: 'translateX(100%)',
  transition: `opacity ${ANIMATIONS.titleDisappear.duration}s ease-in-out`,
  opacity: 0,
  color: '#42567A',
  ...typography.body2Bold,
}));

export const PointWrapper = styled('button')<StyledProps<PointWrapperProps>>(({
  $x,
  $y,
  $angle,
  $isCurrent,
}) => {
  const FULLY_SIZED_BUTTON_STYLES: StyledObject = {
    [`${ConcisePoint}`]: {
      width: '100%',
      height: '100%',
      backgroundColor: '#F4F5F9',
      border: '1px solid #303E5880',
    },

    [`${Content}`]: {
      transition: `opacity ${ANIMATIONS.contentAppear}s ease-in-out`,
      opacity: 1,
    },
  };

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: POINT_FULL_SIZE,
    transition: `transform ${ANIMATIONS.circleRotation.duration}s ease-in-out`,
    height: POINT_FULL_SIZE,
    // чтобы не крутить сами кнопки вместе с контейнером, крутимся с теми же параметрами, но в другую сторону
    transform: `translate(${$x}px, ${$y}px) rotate(${-$angle}deg)`,
    position: 'absolute',
    // выравниваем по центру точки
    left: -POINT_FULL_SIZE / 2,
    top: -POINT_FULL_SIZE / 2,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',

    // точку выбранного периода показываем как при наведении + показываем его подпись
    ...($isCurrent
      ? {
          ...FULLY_SIZED_BUTTON_STYLES,

          [`${Title}`]: {
            // показываем title только когда докрутимся
            transition: `opacity ${ANIMATIONS.titleAppear.duration}s ${ANIMATIONS.circleRotation.duration}s ease-in-out`,
            opacity: 1,
          },
        }
      : {}),

    // раскрываем кнопку при наведении/фокусе через tab
    '&:hover, &:focus': FULLY_SIZED_BUTTON_STYLES,
  };
});
