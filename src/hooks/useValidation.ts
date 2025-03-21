import { useState } from 'react';

export type ValidationRule = (value: string) => boolean;

type ValidationRules<T extends Record<string, unknown> = Record<string, unknown>> = Record<
  keyof T,
  ValidationRule
>;

export const useValidation = <T extends Record<string, unknown>>(rules: ValidationRules<T>) => {
  const [errors, setErrors] = useState<{ [K in keyof T]: boolean } | undefined>(undefined);

  const validate = (values: Record<keyof T, string>) => {
    let hasErrors = false;
    const newErrors = Object.entries(values).reduce(
      (result, [name, value]) => {
        const validationResult = rules[name](value);
        result[name as keyof T] = !validationResult;

        if (validationResult === false) {
          hasErrors = true;
        }
        return result;
      },
      {} as { [K in keyof T]: boolean },
    );

    setErrors(newErrors);

    return {
      hasErrors,
    };
  };

  return {
    validate,
    errors,
  };
};
