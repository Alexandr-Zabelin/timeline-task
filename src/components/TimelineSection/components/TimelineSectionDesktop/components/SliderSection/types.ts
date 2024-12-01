import { DetailsData } from '@components/TimelineSection/types';

interface SliderDetailsData {
  id: string;
  details: DetailsData[];
}

export interface SliderSectionProps {
  data: SliderDetailsData;
  className?: string;
}
