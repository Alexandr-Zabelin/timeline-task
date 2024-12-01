import { FC } from 'react';

import { NumberWithTransition } from '@components/TimelineSection/shared';
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
import { ANIMATIONS, PeriodPoints } from './components';

export const TimelineSectionDesktop: FC<BaseTimelineSectionProps> = ({
  data,
  currentPeriodIdx,
  setCurrentPeriodIdx,
}) => {
  const { title, periods } = data;

  const currentPeriod = periods[currentPeriodIdx];
  const { edges } = currentPeriod;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <CircleSection>
        <MainTextWrapper>
          <NumberWithTransition
            color="#3877EE"
            value={edges.start}
            duration={ANIMATIONS.circleRotation.duration}
          />
          <NumberWithTransition
            color="#EF5DA8"
            value={edges.end}
            duration={ANIMATIONS.circleRotation.duration}
          />
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
        <SliderSection data={currentPeriod} />
      </BottomSection>
    </Wrapper>
  );
};
