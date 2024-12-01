import styled from 'styled-components';

import { ChevronIcon } from '@icons/ChevronIcon';

import { ButtonProps } from './types';
import { getTypedButtonStyles } from './getTypedButtonStyles';

export const Button = styled('button')<StyledProps<ButtonProps>>(
  ({ $size, $visualType, disabled }) => ({
    width: $size,
    height: $size,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...getTypedButtonStyles($visualType),
    cursor: disabled ? 'auto' : 'pointer',
    opacity: disabled ? '0.5' : '1',

    // снимаем все стили наведения при disabled
    ...(disabled ? { '&:hover': {} } : {}),
  }),
);

export const Icon = styled(ChevronIcon)({
  // для корректного выравнивания svg
  display: 'block',
});
