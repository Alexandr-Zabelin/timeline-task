import { FC, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { Text } from './styled';
import { NumberWithTransitionProps } from './types';

export const NumberWithTransition: FC<NumberWithTransitionProps> = ({
  value,
  color,
  duration,
}) => {
  const [number, setNumber] = useState(value);
  const counterRef = useRef({ totalValue: value });

  useEffect(() => {
    gsap.to(counterRef.current, {
      duration,
      totalValue: value,
      roundProps: 'totalValue',
      onUpdate: () => setNumber(counterRef.current.totalValue),
    });
  }, [value]);

  return <Text color={color}>{number}</Text>;
};
