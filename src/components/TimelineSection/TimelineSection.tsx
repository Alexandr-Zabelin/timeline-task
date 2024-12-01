import { FC, useState } from 'react';

import { TimelineSectionProps } from './types';
import { TimelineSectionDesktop, TimelineSectionMobile } from './components';

export const TimelineSection: FC<TimelineSectionProps> = ({
  isMobile,
  data,
  className,
}) => {
  const [currentPeriodIdx, setCurrentPeriodIdx] = useState(0);

  const Section = isMobile ? TimelineSectionMobile : TimelineSectionDesktop;

  return (
    <section className={className}>
      <Section
        currentPeriodIdx={currentPeriodIdx}
        data={data}
        setCurrentPeriodIdx={setCurrentPeriodIdx}
      />
    </section>
  );
};
