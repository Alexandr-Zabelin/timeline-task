import { FC } from 'react';

import { NumberWithTransition } from '@components/TimelineSection/shared';
import { BaseTimelineSectionProps } from '@components/TimelineSection/types';

import { ANIMATIONS } from './constants';
import { SwitchableSection } from './components';
import { MainTextWrapper, PeriodSwitcher, Title } from './styled';

export const TimelineSectionMobile: FC<BaseTimelineSectionProps> = ({
  data,
  currentPeriodIdx,
  setCurrentPeriodIdx,
}) => {
  const { title, periods } = data;

  const currentPeriod = periods[currentPeriodIdx];
  const { edges } = currentPeriod;

  return (
    <>
      <Title>{title}</Title>
      <MainTextWrapper>
        <NumberWithTransition
          color="#3877EE"
          value={edges.start}
          duration={ANIMATIONS.number.duration}
        />
        <NumberWithTransition
          color="#EF5DA8"
          value={edges.end}
          duration={ANIMATIONS.number.duration}
        />
      </MainTextWrapper>
      <SwitchableSection data={currentPeriod} />
      <PeriodSwitcher
        currentPeriodIdx={currentPeriodIdx}
        onPeriodIdxChange={setCurrentPeriodIdx}
        periodsCount={periods.length}
      />
    </>
  );
};
