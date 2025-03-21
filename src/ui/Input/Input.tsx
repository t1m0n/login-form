import { ComponentProps } from 'react';
import { StyledInput, StyledInputWrap, StyledPlaceholder } from './styled';

type InputProps = ComponentProps<'input'> & {
  error?: boolean;
};

export const Input = ({ placeholder, error, ...props }: InputProps) => {
  const hasValue = !!props.value;

  return (
    <StyledInputWrap>
      <StyledInput {...props} aria-invalid={!!error} $hasValue={hasValue} $isError={error} />
      {placeholder ? (
        <StyledPlaceholder $hasValue={hasValue}>{placeholder}</StyledPlaceholder>
      ) : null}
    </StyledInputWrap>
  );
};
