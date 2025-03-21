export const getPrefersReducedMotionFlag = () => {
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-reduced-motion)').matches;
  }
  return false;
};
