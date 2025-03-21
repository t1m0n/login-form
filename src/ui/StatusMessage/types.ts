import { ReactNode } from 'react';

export interface StatusMessageProps {
  children: ReactNode;
  status: 'danger' | 'success';
  className?: string;
}
