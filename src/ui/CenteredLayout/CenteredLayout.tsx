import { ReactNode } from 'react';
import { StyledCenteredLayout } from './styled';

interface CenteredLayoutProps {
  children: ReactNode;
}

export const CenteredLayout = ({ children }: CenteredLayoutProps) => {
  return <StyledCenteredLayout>{children}</StyledCenteredLayout>;
};
