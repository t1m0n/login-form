import styled from 'styled-components';
import { getTransitionStyles } from ':utils/transition';

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.linkColor};
  text-decoration: none;

  ${getTransitionStyles('color')}

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.linkColorHover};
  }
`;
