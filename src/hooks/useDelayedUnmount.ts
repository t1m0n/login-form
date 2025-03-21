import { useCallback, useEffect, useRef, useState } from 'react';
import { usePrev } from './usePrev';

type UseDelayedUnmountProps = {
  isMounted?: boolean;
  delay?: number;
};

/**
 * Позволяет скрывать элемент отложено.
 * Нужно для добавления анимации на стадии unmount
 */
export const useDelayedUnmount = ({ isMounted, delay = 300 }: UseDelayedUnmountProps) => {
  const [isVisibleLocal, setIsVisibleLocal] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const $timeoutId = useRef<ReturnType<typeof setTimeout>>(undefined);
  const prevIsMounted = usePrev(isMounted);

  const exit = useCallback(() => {
    setIsExiting(true);

    $timeoutId.current = setTimeout(() => {
      setIsVisibleLocal(false);
      setIsExiting(false);
    }, delay);
  }, [delay]);

  useEffect(() => {
    if (isMounted) {
      setIsVisibleLocal(true);
      setIsExiting(false);
    }
    if (!isMounted && prevIsMounted) {
      exit();
    }
  }, [isMounted, exit, prevIsMounted]);

  useEffect(() => {
    return () => {
      clearTimeout($timeoutId.current);
    };
  }, [isMounted]);

  return {
    isMounted: isVisibleLocal,
    isExiting,
    exit,
  };
};
