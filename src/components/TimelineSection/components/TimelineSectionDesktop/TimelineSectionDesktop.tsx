import { FC, useState } from 'react';

import { BaseTimelineSectionProps } from '@components/TimelineSection/types';

import {
  BottomSection,
  CircleSection,
  MainTextWrapper,
  PeriodSwitcher,
  SliderSection,
  Title,
  Wrapper,
} from './styled';
import { NumberWithTransition, PeriodPoints } from './components';

export const TimelineSectionDesktop: FC<BaseTimelineSectionProps> = ({
  data,
}) => {
  const { title, periods } = data;

  const [currentPeriodIdx, setCurrentPeriodIdx] = useState(0);

  const currentPeriod = periods[currentPeriodIdx];
  const { edges, details, id } = currentPeriod;

  const sliderSectionData = { details, id };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <CircleSection>
        <MainTextWrapper>
          <NumberWithTransition color="#3877EE" value={edges.start} />
          <NumberWithTransition color="#EF5DA8" value={edges.end} />
        </MainTextWrapper>
        <PeriodPoints
          periods={periods}
          currentPeriodIdx={currentPeriodIdx}
          onPointClick={setCurrentPeriodIdx}
        />
      </CircleSection>
      <BottomSection>
        <PeriodSwitcher
          currentPeriodIdx={currentPeriodIdx}
          onPeriodIdxChange={setCurrentPeriodIdx}
          periodsCount={periods.length}
        />
        <SliderSection data={sliderSectionData} />
      </BottomSection>
    </Wrapper>
  );
};
