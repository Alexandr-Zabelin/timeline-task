import { FC, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { Text } from './styled';
import { DURATION } from './constants';
import { NumberWithTransitionProps } from './types';

export const NumberWithTransition: FC<NumberWithTransitionProps> = ({
  value,
  color,
}) => {
  const [number, setNumber] = useState(value);
  const counterRef = useRef({ totalValue: value });

  useEffect(() => {
    gsap.to(counterRef.current, {
      duration: DURATION,
      totalValue: value,
      roundProps: 'totalValue',
      onUpdate: () => setNumber(counterRef.current.totalValue),
    });
  }, [value]);

  return <Text color={color}>{number}</Text>;
};
