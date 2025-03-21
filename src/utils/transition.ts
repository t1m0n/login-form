import { CSSProperties } from 'react';
import { css } from 'styled-components';
import { getPrefersReducedMotionFlag } from ':utils/getPrefersReducedMotionFlag';

const convertToKebab = (str: string) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter.toUpperCase() === letter) {
      result += `-${letter.toLowerCase()}`;
      continue;
    }

    result += letter;
  }

  return result;
};

export const getTransitionStyles = (
  properties: Array<keyof CSSProperties> | keyof CSSProperties,
) => {
  const disableAnimation = getPrefersReducedMotionFlag();
  if (disableAnimation) return null;

  const parsedProperties = Array.isArray(properties)
    ? properties.map(convertToKebab).join(', ')
    : convertToKebab(properties);

  return css`
    transition-property: ${parsedProperties};
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-timing-function: ${({ theme }) => theme.transitionEasing};
  `;
};
