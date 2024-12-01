import { DetailsData } from '@components/TimelineSection/types';

export interface WrapperProps {
  maxWidth: number;
}

export interface SlideProps extends WrapperProps {
  detail: DetailsData;
}
