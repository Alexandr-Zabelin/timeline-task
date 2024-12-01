import styled from 'styled-components';

export const Title = styled('h3')(({ theme: { typography } }) => ({
  color: '#42567A',
  paddingBottom: 20,
  borderBottom: '1px solid #C7CDD9',
  ...typography.body2Bold,
}));

export const SliderWrapper = styled('div')({
  marginTop: 20,
  height: 200,
});
