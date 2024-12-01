import { StyledObject } from 'styled-components';

import { ButtonVisualType } from './types';

export const getTypedButtonStyles = (type: ButtonVisualType): StyledObject =>
  type === 'primary'
    ? {
        boxShadow: '0px 0px 15px 0px #3877EE1A',
        backgroundColor: '#FFFFFF',
        border: 'none',
      }
    : {
        '&:hover': {
          backgroundColor: '#FFFFFF',
        },

        backgroundColor: 'transparent',

        border: '1px solid #42567A80',
      };
