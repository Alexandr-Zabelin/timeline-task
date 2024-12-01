import styled from 'styled-components';

export const Text = styled('p')(({ theme: { typography } }) => ({
  color: '#42567A',
  ...typography.caption1Regular,
}));

export const ButtonsWrapper = styled('div')({
  marginTop: 20,
  display: 'flex',
  gap: 20,
});
