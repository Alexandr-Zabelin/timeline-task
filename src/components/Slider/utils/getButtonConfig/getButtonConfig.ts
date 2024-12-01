import {
  ButtonDirectionType,
  NextPrevButtonProps,
} from '@components/NextPrevButton';

export const getButtonConfig = (
  direction: ButtonDirectionType,
): NextPrevButtonProps => ({
  types: {
    visual: 'primary',
    direction,
  },
  sizes: {
    button: 40,
    icon: { height: 10, width: 5 },
  },
});
