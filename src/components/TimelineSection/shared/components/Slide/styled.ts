import styled from 'styled-components';

import { WrapperProps } from './types';

export const Wrapper = styled('div')<StyledProps<WrapperProps>>(
  ({ $maxWidth }) => ({
    maxWidth: $maxWidth,
  }),
);

export const Title = styled('h3')(({ theme: { typography } }) => ({
  color: '#3877EE',
  ...typography.body1Regular,
}));

export const TextContent = styled('p')(({ theme: { typography } }) => ({
  color: '#42567A',
  marginTop: 15,
  ...typography.body2Regular,
}));
