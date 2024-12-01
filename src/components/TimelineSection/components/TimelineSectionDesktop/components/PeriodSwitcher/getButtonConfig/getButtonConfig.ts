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
    button: 50,
    icon: { height: 12, width: 6 },
  },
});
