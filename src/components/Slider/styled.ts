import styled from 'styled-components';

import { NextPrevButton } from '@components/NextPrevButton';

import { BUTTON_OFFSET } from './constants';

export const SliderWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

const Button = styled(NextPrevButton)({
  position: 'absolute',
  flexShrink: 0,
});

export const PrevButton = styled(Button)({
  // по макету выносим кнопки за пределы контейнера
  left: -BUTTON_OFFSET,
});

export const NextButton = styled(Button)({
  right: -BUTTON_OFFSET,
});
