import styled from 'styled-components';

export const Text = styled('h1')(({ theme: { typography }, color }) => ({
  ...typography.h1Bold,
  color,
}));
