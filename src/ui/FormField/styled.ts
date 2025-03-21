import styled, { css } from 'styled-components';
import { spacing } from ':theme';
import { getTransitionStyles } from ':utils/transition';

export const StyledFormField = styled.label`
  display: block;
  margin-bottom: ${spacing(6)};
`;

const startingStyles = css`
  height: 0;
  opacity: 0;
  transform: translateY(${spacing(1)});
`;

export const StyledErrorMessage = styled.div<{ $isExiting?: boolean }>`
  color: ${({ theme }) => theme.dangerColor};
  font-size: 12px;
  opacity: 1;
  transform: translateY(2px);
  height: 16px; // Для демо можно обойтись фиксированной высотой

  ${getTransitionStyles(['scale', 'transform', 'opacity', 'height'])}

  @starting-style {
    ${startingStyles}
  }

  ${({ $isExiting }) => {
    if ($isExiting) {
      return startingStyles;
    }
  }}
`;
