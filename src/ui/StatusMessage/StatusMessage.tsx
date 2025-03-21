import { StyledStatusMessage } from './styled';
import { StatusMessageProps } from './types';

export const StatusMessage = ({ children, status, className }: StatusMessageProps) => {
  return (
    <StyledStatusMessage $status={status} className={className}>
      {children}
    </StyledStatusMessage>
  );
};
