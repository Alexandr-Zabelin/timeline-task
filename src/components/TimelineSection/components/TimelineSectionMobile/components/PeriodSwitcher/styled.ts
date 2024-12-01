import styled from 'styled-components';

import { Pagination as PaginationComponent } from './Pagination';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  position: 'relative',
});

export const Title = styled('p')(({ theme: { typography } }) => ({
  color: '#42567A',
  ...typography.caption1Regular,
}));

export const ButtonsWrapper = styled('div')({
  marginTop: 10,
  display: 'flex',
  gap: 8,
});

export const Pagination = styled(PaginationComponent)({
  // выравниваем по центру контейнера
  left: '50%',
  transform: 'translateX(-50%)',
  position: 'absolute',
});
