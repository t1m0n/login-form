import { ReactNode } from 'react';
import { StyledPanel, StyledPanelHeader, StyledPanelNote, StyledPanelTitle } from './styled';

interface PanelProps {
  children: ReactNode;
  className?: string;
}

interface PanelInnerProps {
  children: ReactNode;
}

export const Panel = ({ children, className }: PanelProps) => {
  return <StyledPanel className={className}>{children}</StyledPanel>;
};

const Header = ({ children }: PanelInnerProps) => {
  return <StyledPanelHeader>{children}</StyledPanelHeader>;
};
Panel.Header = Header;

const Title = ({ children }: PanelInnerProps) => {
  return <StyledPanelTitle>{children}</StyledPanelTitle>;
};
Panel.Title = Title;

const Note = ({ children }: PanelInnerProps) => {
  return <StyledPanelNote>{children}</StyledPanelNote>;
};
Panel.Note = Note;
