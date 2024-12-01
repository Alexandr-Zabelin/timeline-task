import { FC } from 'react';

import { SlideProps } from './types';
import { TextContent, Title } from './styled';

export const Slide: FC<SlideProps> = ({ detail: { title, content } }) => (
  <>
    <Title>{title}</Title>
    <TextContent>{content}</TextContent>
  </>
);
