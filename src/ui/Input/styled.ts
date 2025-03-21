import styled, { css } from 'styled-components';
import { getTransitionStyles } from ':utils/transition';

export const StyledInputWrap = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.uiFontSize};
`;

const focusedStyles = css`
  background: ${({ theme }) => theme.inputBgFocus};
  border-color: ${({ theme }) => theme.inputBorderFocus};
  padding-top: 12px;
`;

const hasValueStyles = css`
  padding-top: 12px;
`;

const placeholderFocusedStyles = css`
  font-size: 0.75em;
  transform: translateY(-12px);
`;

export const StyledPlaceholder = styled.span<{ $hasValue?: boolean }>`
  position: absolute;
  pointer-events: none;
  font-size: 1em;
  left: ${({ theme }) => `calc(${theme.uiInlineGap} + 1px)`};
  line-height: 1;
  top: calc(50% - 0.5em);
  opacity: ${({ theme }) => theme.uiDisabledOpacity};

  ${getTransitionStyles(['fontSize', 'transform'])}

  ${({ $hasValue }) => {
    if (!$hasValue) return '';

    return placeholderFocusedStyles;
  }}
`;

export const StyledInput = styled.input<{ $hasValue?: boolean; $isError?: boolean }>(
  ({ theme, $hasValue, $isError }) => {
    return css`
      background: ${theme.inputBg};
      height: ${theme.uiHeight};
      font-family: ${theme.baseFontFamily};
      font-size: 1em;
      border-radius: ${theme.uiRadius};
      padding-inline: ${theme.uiInlineGap};
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0);
      outline: none;

      ${getTransitionStyles(['background', 'borderColor'])}

      &:hover {
        background: ${theme.inputBgHover};
      }

      &:focus {
        ${focusedStyles}

        ~ ${StyledPlaceholder} {
          ${placeholderFocusedStyles}
        }
      }

      ${$hasValue ? hasValueStyles : ''}

      ${$isError
        ? css`
            border-color: ${theme.dangerBorderColor};
          `
        : ''}
    `;
  },
);
