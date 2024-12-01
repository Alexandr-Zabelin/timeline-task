import { FC } from 'react';

import { SlideProps } from './types';
import { TextContent, Title, Wrapper } from './styled';

export const Slide: FC<SlideProps> = ({
  detail: { title, content },
  maxWidth,
}) => (
  <Wrapper $maxWidth={maxWidth}>
    <Title>{title}</Title>
    <TextContent>{content}</TextContent>
  </Wrapper>
);
