import { ComponentProps, ReactNode } from 'react';
import { Preloader } from ':ui/Preloader';
import { StyledButton, StyledButtonLabel, StyledPreloader } from ':ui/Button/styled';
import { useDelayedUnmount } from ':hooks/useDelayedUnmount';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  isFullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button = ({ children, isFullWidth, isLoading, disabled, ...props }: ButtonProps) => {
  const { isMounted, isExiting } = useDelayedUnmount({ isMounted: isLoading });
  const isDisabled = disabled || isLoading;

  return (
    <StyledButton
      {...props}
      $isFullWidth={isFullWidth}
      disabled={isDisabled}
      aria-disabled={isDisabled}>
      <StyledButtonLabel $isLoading={isLoading}>{children}</StyledButtonLabel>
      {isMounted && (
        <StyledPreloader $isExiting={isExiting}>
          <Preloader color='#fff' />
        </StyledPreloader>
      )}
    </StyledButton>
  );
};
