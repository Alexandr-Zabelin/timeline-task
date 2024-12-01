import { FC } from 'react';

import { FULL_CIRCLE_DEGREE, getCoordsOfPointOnCircle } from '@utils/math';

import { PeriodPointsProps } from './types';
import {
  ConcisePoint,
  Content,
  PeriodPointsWrapper,
  PointWrapper,
  Title,
} from './styled';
import { getPointAngle } from './getPointAngle';
import { BASE_ITEM_ANGLE, RADIUS } from './constants';

export const PeriodPoints: FC<PeriodPointsProps> = ({
  periods,
  currentPeriodIdx,
  onPointClick,
}) => {
  const periodsCount = periods.length;

  const angleShiftNotNormalized = getPointAngle(periodsCount, currentPeriodIdx);
  // крутимся по кратчайшему пути
  const angleShift =
    (angleShiftNotNormalized >= FULL_CIRCLE_DEGREE / 2
      ? angleShiftNotNormalized - FULL_CIRCLE_DEGREE
      : angleShiftNotNormalized) + BASE_ITEM_ANGLE;

  return (
    <PeriodPointsWrapper $angle={angleShift}>
      {periods.map(({ id, title }, idx) => {
        const { x, y } = getCoordsOfPointOnCircle(
          getPointAngle(periodsCount, idx),
          RADIUS,
        );

        const isCurrent = idx === currentPeriodIdx;
        const visibleIdx = idx + 1;
        const onClick = () => onPointClick(idx);

        return (
          <PointWrapper
            $isCurrent={isCurrent}
            $angle={angleShift}
            onClick={onClick}
            $x={x}
            $y={y}
            key={id}
          >
            <Title>{title}</Title>
            <ConcisePoint>
              <Content>{visibleIdx}</Content>
            </ConcisePoint>
          </PointWrapper>
        );
      })}
    </PeriodPointsWrapper>
  );
};
