import styled, { css } from 'styled-components';
import { spacing } from ':theme';
import { onMobile } from ':utils/media';
import { getTransitionStyles } from ':utils/transition';

export const StyledPanel = styled.section`
  --shadow-color: hsl(0deg 0% 83% / 0.34);

  background: ${({ theme }) => theme.colors.light};
  padding: ${spacing(10)} ${spacing(9)};
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
  box-shadow:
    0 0.2px 0.2px var(--shadow-color),
    0 1.2px 1.3px -0.4px var(--shadow-color),
    0 2.3px 2.6px -0.7px var(--shadow-color),
    0 3.8px 4.3px -1.1px var(--shadow-color),
    0 6.1px 6.9px -1.4px var(--shadow-color),
    0 9.5px 10.7px -1.8px var(--shadow-color),
    0.1px 14.4px 16.2px -2.1px var(--shadow-color),
    0.1px 21.2px 23.9px -2.5px var(--shadow-color);

  transform: translateY(0px);
  opacity: 1;

  ${getTransitionStyles(['opacity', 'transform', 'boxShadow'])}

  ${onMobile(css`
    padding: ${spacing(9)} ${spacing(6)};
  `)}
`;

export const StyledPanelHeader = styled.div`
  margin-bottom: ${spacing(6)};
`;

export const StyledPanelTitle = styled.h1``;
export const StyledPanelNote = styled.span``;
