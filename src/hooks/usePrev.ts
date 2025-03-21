import { useEffect, useRef } from 'react';

export const usePrev = <T>(val: T) => {
  const prevValue = useRef<T>(val);

  useEffect(() => {
    prevValue.current = val;
  }, [val]);

  return prevValue.current;
};
