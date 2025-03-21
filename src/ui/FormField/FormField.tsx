import { ReactNode } from 'react';
import { StyledErrorMessage, StyledFormField } from './styled';
import { useDelayedUnmount } from ':hooks/useDelayedUnmount';

interface FormFieldProps {
  children: ReactNode;
  error?: ReactNode;
}

export const FormField = ({ children, error }: FormFieldProps) => {
  const { isMounted, isExiting } = useDelayedUnmount({
    isMounted: !!error,
  });
  return (
    <StyledFormField>
      {children}
      {isMounted && <StyledErrorMessage $isExiting={isExiting}>{error}</StyledErrorMessage>}
    </StyledFormField>
  );
};
