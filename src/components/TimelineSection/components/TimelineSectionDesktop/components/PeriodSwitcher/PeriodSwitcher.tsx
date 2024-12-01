import { FC } from 'react';

import { NextPrevButton } from '@components/NextPrevButton';

import { PeriodSwitcherProps } from './types';
import { ButtonsWrapper, Text } from './styled';
import { NEXT_BTN_CONFIG, PREV_BTN_CONFIG } from './constants';

export const PeriodSwitcher: FC<PeriodSwitcherProps> = ({
  periodsCount,
  onPeriodIdxChange,
  currentPeriodIdx,
  className,
}) => {
  const onPrevButtonCLick = () => onPeriodIdxChange(prev => prev - 1);
  const onNextButtonCLick = () => onPeriodIdxChange(prev => prev + 1);

  const isPrevButtonDisabled = currentPeriodIdx === 0;
  const isNextButtonDisabled = currentPeriodIdx === periodsCount - 1;

  const visibleCurrentPeriodIdx = currentPeriodIdx + 1;

  return (
    <div className={className}>
      <Text>{`${visibleCurrentPeriodIdx}/${periodsCount}`}</Text>
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
  );
};
