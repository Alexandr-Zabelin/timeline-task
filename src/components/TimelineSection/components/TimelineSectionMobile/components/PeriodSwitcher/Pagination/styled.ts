import styled from 'styled-components';

import { ButtonProps } from './types';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const Button = styled('button')<StyledProps<ButtonProps>>(
  ({ $isCurrent }) => ({
    width: 6,
    height: 6,
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: '#42567A',
    transition: 'opacity 0.3s ease-in-out',
    opacity: $isCurrent ? 1 : 0.4,
  }),
);
