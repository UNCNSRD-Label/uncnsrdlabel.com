"use client";

import { FC } from "react";
import { useCounter, useInterval } from "react-use";

type Props = {
  speed?: number;
  text: string;
};

export const LetterIterator: FC<Props> = ({ speed = 2000, text }) => {
  const max = text.length - 1;

  const [value, { inc, dec, set, reset }] = useCounter(0, max);

  useInterval(() => {
    if (value === max) {
      reset();
    } else {
      inc();
    }
  }, speed);

  return <>{text.charAt(value)}</>;
};

export default LetterIterator;
