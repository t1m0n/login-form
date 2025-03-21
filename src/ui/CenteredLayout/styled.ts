import styled, { css } from 'styled-components';
import { onMobile } from ':utils/media';

export const StyledCenteredLayout = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;

  ${onMobile(css`
    align-items: flex-end;
  `)}
`;
