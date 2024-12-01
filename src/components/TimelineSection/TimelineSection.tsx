import { FC } from 'react';

import { TimelineSectionProps } from './types';
import { TimelineSectionDesktop } from './components';

const TimelineSectionMobile: FC = () => <></>;

export const TimelineSection: FC<TimelineSectionProps> = ({
  isMobile,
  data,
}) => (
  <>
    {isMobile ? (
      <TimelineSectionMobile />
    ) : (
      <TimelineSectionDesktop data={data} />
    )}
  </>
);
