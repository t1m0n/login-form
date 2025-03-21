import { ReactNode } from 'react';
import { StyledLink } from './syled';

interface LinkProps {
  children: ReactNode;
  href?: string;
}

export const Link = ({ children, href }: LinkProps) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
