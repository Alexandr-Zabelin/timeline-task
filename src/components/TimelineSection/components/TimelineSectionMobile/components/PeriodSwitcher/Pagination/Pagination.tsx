import { FC } from 'react';

import { PeriodSwitcherProps } from '@components/TimelineSection/shared';

import { Button, Wrapper } from './styled';

export const Pagination: FC<PeriodSwitcherProps> = ({
  periodsCount,
  onPeriodIdxChange,
  currentPeriodIdx,
  className,
}) => (
  <Wrapper className={className}>
    {Array.from({ length: periodsCount }).map((_, idx) => {
      const isCurrent = idx === currentPeriodIdx;
      const onClick = () => onPeriodIdxChange(idx);

      return <Button $isCurrent={isCurrent} onClick={onClick} key={idx} />;
    })}
  </Wrapper>
);
