import styled, { css } from 'styled-components';
import { Panel } from ':ui/Panel';
import { StatusMessage } from ':ui/StatusMessage';
import { spacing } from ':theme';
import { getTransitionStyles } from ':utils/transition';
import { onMobile } from ':utils/media';

export const StyledLoginFormWrap = styled.div`
  --duration: 0.6s;
  --transition-offset: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row-gap: ${spacing(6)};

  ${onMobile(css`
    width: 100%;
  `)}
`;

export const StyledLoginForm = styled(Panel)`
  width: 400px;

  transition-duration: var(--duration);
  transition-delay: 0.2s;

  @starting-style {
    box-shadow:
      0 0 0 var(--shadow-color),
      0 0 0 0 var(--shadow-color),
      0 0 0 0 var(--shadow-color),
      0 0 0 0 var(--shadow-color),
      0 0 0 0 var(--shadow-color),
      0 0 0 0 var(--shadow-color),
      0 0 0 0 var(--shadow-color),
      0 0 0 0 var(--shadow-color);

    opacity: 0;
    transform: translateY(var(--transition-offset));
  }

  ${onMobile(css`
    width: 100%;
    border-radius: 12px 12px 0 0;
  `)}
`;

export const StyledLogo = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  grid-column-gap: ${spacing(2)};

  ${getTransitionStyles(['opacity', 'transform'])};
  transform: translateY(0) rotateY(0);
  transition-delay: 0.1s;
  transition-duration: var(--duration);

  @starting-style {
    opacity: 0;
    transform: translateY(var(--transition-offset));
  }
`;

export const StyledLogoImg = styled.img`
  width: 56px;
`;

export const StyledLogoName = styled.span`
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  line-height: 1.5;
  font-size: 24px;
  font-style: normal;

  width: 82px;
  overflow: hidden;

  ${getTransitionStyles(['width'])};
  transition-duration: var(--duration);
  transition-delay: 0.25s;
  transition-timing-function: cubic-bezier(0.66, 0, 0.34, 1);

  @starting-style {
    width: 0;
  }
`;

export const StyledSubmitRow = styled.div`
  margin-top: ${spacing(8)};
`;

const startingStyles = css`
  opacity: 0;
  transform: translateY(6px);
  height: 0;
  margin-top: 0;
`;

export const StyledResultMessage = styled(StatusMessage)<{ $isExiting?: boolean }>`
  height: 16px; // Для демо упрощаем работу с высотой
  text-align: center;
  margin-top: ${spacing(2)};
  ${getTransitionStyles(['opacity', 'transform', 'height'])}

  @starting-style {
    ${startingStyles}
  }

  ${({ $isExiting }) => ($isExiting ? startingStyles : '')}
`;
