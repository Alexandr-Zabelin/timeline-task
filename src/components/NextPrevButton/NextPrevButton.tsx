import { FC } from 'react';

import { Button, Icon } from './styled';
import { NextPrevButtonProps } from './types';

export const NextPrevButton: FC<NextPrevButtonProps> = ({
  types: { visual, direction },
  sizes: { button, icon },
  ...baseButtonProps
}) => {
  const iconColor = visual === 'primary' ? '#3877EE' : '#42567A';
  const iconDirection = direction === 'prev' ? 'left' : 'right';

  return (
    <Button $size={button} $visualType={visual} {...baseButtonProps}>
      <Icon {...icon} color={iconColor} direction={iconDirection} />
    </Button>
  );
};
