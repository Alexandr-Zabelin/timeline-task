import { FC } from 'react';

import { NextPrevButton } from '@components/NextPrevButton';
import { PeriodSwitcherProps } from '@components/TimelineSection/shared';

import { NEXT_BTN_CONFIG, PREV_BTN_CONFIG } from './constants';
import { ButtonsWrapper, Pagination, Title, Wrapper } from './styled';

export const PeriodSwitcher: FC<PeriodSwitcherProps> = ({
  className,
  ...otherProps
}) => {
  const { periodsCount, onPeriodIdxChange, currentPeriodIdx } = otherProps;

  const onPrevButtonCLick = () => onPeriodIdxChange(prev => prev - 1);
  const onNextButtonCLick = () => onPeriodIdxChange(prev => prev + 1);

  const isPrevButtonDisabled = currentPeriodIdx === 0;
  const isNextButtonDisabled = currentPeriodIdx === periodsCount - 1;

  const visibleCurrentPeriodIdx = currentPeriodIdx + 1;

  return (
    <Wrapper className={className}>
      <div>
        <Title>{`${visibleCurrentPeriodIdx}/${periodsCount}`}</Title>
        <ButtonsWrapper>
          <NextPrevButton
            {...PREV_BTN_CONFIG}
            onClick={onPrevButtonCLick}
            disabled={isPrevButtonDisabled}
          />
          <NextPrevButton
            {...NEXT_BTN_CONFIG}
            onClick={onNextButtonCLick}
            disabled={isNextButtonDisabled}
          />
        </ButtonsWrapper>
      </div>
      <Pagination {...otherProps} />
    </Wrapper>
  );
};
