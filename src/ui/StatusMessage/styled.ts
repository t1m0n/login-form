import styled from 'styled-components';
import { StatusMessageProps } from './types';

export const StyledStatusMessage = styled.div<{ $status: StatusMessageProps['status'] }>`
  color: ${({ $status, theme }) => ($status === 'danger' ? theme.dangerColor : theme.successColor)};
`;
