import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from { rotate: 0deg}
  to { rotate: 360deg}
`;

export const StyledCanvas = styled.canvas<{ size: number }>`
  display: block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  animation: ${animation} 1s infinite cubic-bezier(0.44, 0, 0.56, 1);
`;
