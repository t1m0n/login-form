import styled, { css } from 'styled-components';
import { getTransitionStyles } from ':utils/transition';

export const StyledButton = styled.button<{ $isFullWidth?: boolean }>(({ theme, $isFullWidth }) => {
  return css`
    height: ${theme.uiHeight};
    background: ${theme.buttonBg};
    color: ${theme.buttonColor};
    border: none;
    cursor: pointer;
    font-family: ${theme.baseFontFamily};
    font-size: ${theme.uiFontSize};
    border-radius: ${theme.uiRadius};
    display: inline-flex;
    align-items: center;
    padding-inline: ${theme.uiInlineGap};
    justify-content: center;
    width: ${$isFullWidth ? '100%' : 'auto'};
    overflow: hidden;

    ${getTransitionStyles(['background', 'opacity'])}

    &:hover, &:focus {
      outline: none;
      background: ${theme.buttonBgHover};
    }

    &:active {
      background: ${theme.buttonBgActive};
    }

    &[disabled] {
      opacity: ${theme.uiDisabledOpacity};
      pointer-events: none;
    }
  `;
});

export const StyledButtonLabel = styled.span<{ $isLoading?: boolean }>`
  ${getTransitionStyles(['opacity', 'transform'])};

  ${({ $isLoading }) => {
    if (!$isLoading) return;

    return css`
      transform: translateY(-100%);
      opacity: 0;
    `;
  }}
`;

const startingPreloaderStyles = css`
  opacity: 0;
  transform: translateY(100%);
`;

export const StyledPreloader = styled.span<{ $isExiting?: boolean }>`
  opacity: 1;
  transform: translateY(0);
  position: absolute;
  pointer-events: none;
  ${getTransitionStyles(['opacity', 'transform'])};

  @starting-style {
    ${startingPreloaderStyles}
  }

  ${({ $isExiting }) => ($isExiting ? startingPreloaderStyles : '')}
`;
