import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body,
button,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
  border: 0;
}

`;

export const AppWrapper = styled('div')({
  backgroundColor: '#F4F5F9',
  padding: '10px 100px',
});
