import { ButtonHTMLAttributes } from 'react';

import { ButtonVisualType } from './getTypedButtonStyles';

export type ButtonDirectionType = 'prev' | 'next';

interface ButtonTypes {
  visual: ButtonVisualType;
  direction: ButtonDirectionType;
}

interface IconSize {
  height: number;
  width: number;
}

interface Sizes {
  button: number;
  icon: IconSize;
}

type BaseHTMLButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
>;

export interface ButtonProps extends Pick<NextPrevButtonProps, 'disabled'> {
  size: number;
  visualType: ButtonVisualType;
}

export interface NextPrevButtonProps extends BaseHTMLButtonProps {
  sizes: Sizes;
  types: ButtonTypes;
}
