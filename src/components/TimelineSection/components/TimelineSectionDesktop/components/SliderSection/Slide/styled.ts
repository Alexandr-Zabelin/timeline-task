import styled from 'styled-components';

export const Title = styled('h3')(({ theme: { typography } }) => ({
  color: '#3877EE',
  ...typography.body1Regular,
}));

export const TextContent = styled('p')(({ theme: { typography } }) => ({
  color: '#42567A',
  maxWidth: 320,
  marginTop: 15,
  ...typography.body2Regular,
}));
