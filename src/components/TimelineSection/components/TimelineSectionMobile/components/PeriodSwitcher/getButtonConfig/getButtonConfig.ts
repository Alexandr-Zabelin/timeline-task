import {
  ButtonDirectionType,
  NextPrevButtonProps,
} from '@components/NextPrevButton';

export const getButtonConfig = (
  direction: ButtonDirectionType,
): NextPrevButtonProps => ({
  types: {
    visual: 'secondary',
    direction,
  },
  sizes: {
    button: 25,
    icon: { height: 7, width: 3.5 },
  },
});
