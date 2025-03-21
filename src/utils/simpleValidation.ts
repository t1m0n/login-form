type ValidationRule = (value: string) => boolean;

type ValidationRules<T extends Record<string, unknown> = Record<string, unknown>> = Record<
  keyof T,
  ValidationRule
>;

export const simpleValidation = <T extends Record<string, unknown>>(rules: ValidationRules<T>) => {
  return (values: Record<keyof T, string>) => {
    return Object.entries(values).reduce(
      (result, [name, value]) => {
        result[name] = rules[name](value);
        return result;
      },
      {} as Record<string, boolean>,
    );
  };
};
