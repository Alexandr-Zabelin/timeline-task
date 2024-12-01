import styled from 'styled-components';

export const Text = styled('p')(({ theme: { typography } }) => ({
  margin: 0,
  padding: 0,
  color: '#42567A',
  ...typography.caption1Regular,
}));

export const ButtonsWrapper = styled('div')({
  marginTop: 20,
  display: 'flex',
  gap: 20,
});
