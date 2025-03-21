import { ChangeEvent, FormEventHandler, useCallback, useMemo, useState } from 'react';
import { Panel } from ':ui/Panel';
import { Link } from ':ui/Link';
import { FormField } from ':ui/FormField';
import { Button } from ':ui/Button';
import { Input } from ':ui/Input/';
import { EMAIL_REGEXP } from '../../consts';
import {
  StyledLoginForm,
  StyledLoginFormWrap,
  StyledLogo,
  StyledLogoImg,
  StyledLogoName,
  StyledResultMessage,
  StyledSubmitRow,
} from './styled';
import { login } from ':api/login';
import { useValidation, ValidationRule } from ':hooks/useValidation';
import { useDelayedUnmount } from ':hooks/useDelayedUnmount';
import logoImg from '/duck.svg';

type LoginFormData = {
  login: string;
  password: string;
};

const validationRules: Record<keyof LoginFormData, ValidationRule> = {
  login: (value) => !!value.match(EMAIL_REGEXP),
  password: (value) => !!value,
};

export const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    login: '',
    password: '',
  });
  const { validate, errors } = useValidation(validationRules);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState<false | string>(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { isMounted: messageIsMounted, isExiting: messageIsExiting } = useDelayedUnmount({
    isMounted: !!isFailed || isSuccess,
  });

  const handleChange = useCallback(
    (name: keyof LoginFormData) => {
      return (e: ChangeEvent<HTMLInputElement>) => {
        if (errors) {
          validate(formData);
        }
        setFormData((value) => {
          const newData = {
            ...value,
            [name]: e.target.value,
          };

          if (errors) {
            validate(newData);
          }
          return newData;
        });
      };
    },
    [errors, formData, validate],
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { hasErrors } = validate(formData);
    setIsFailed(false);
    setIsSuccess(false);

    if (hasErrors) return;

    setIsLoading(true);

    try {
      await login();
      setIsSuccess(true);
    } catch (error) {
      setIsFailed(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  const responseResultMessage = useMemo(() => {
    if (isFailed) {
      return isFailed;
    }
    if (isSuccess) {
      return 'Ура!🎉 Вы успешно вошли в свой аккаунт!';
    }
  }, [isFailed, isSuccess]);

  return (
    <StyledLoginFormWrap>
      <StyledLogo>
        <StyledLogoImg src={logoImg} alt='Логотип' />
        <StyledLogoName>Утёнок</StyledLogoName>
      </StyledLogo>
      <StyledLoginForm>
        <Panel.Header>
          <Panel.Title>Войдите</Panel.Title>
          <Panel.Note>
            или <Link href='/'>зарегистрируйтесь</Link>
          </Panel.Note>
        </Panel.Header>
        <form onSubmit={handleSubmit} noValidate>
          <FormField error={errors?.login && 'Введите почту'}>
            <Input
              onChange={handleChange('login')}
              value={formData.login}
              name='login'
              type='email'
              autoComplete='off'
              placeholder='Почта'
              error={errors?.login}
            />
          </FormField>
          <FormField error={errors?.password && 'Введите пароль'}>
            <Input
              onChange={handleChange('password')}
              value={formData.password}
              name='password'
              type='password'
              autoComplete='off'
              placeholder='Пароль'
              error={errors?.password}
            />
          </FormField>
          <StyledSubmitRow>
            <Button isFullWidth isLoading={isLoading} type='submit'>
              Войти
            </Button>
          </StyledSubmitRow>
          {messageIsMounted && (
            <StyledResultMessage
              status={isFailed ? 'danger' : 'success'}
              $isExiting={messageIsExiting}>
              {responseResultMessage}
            </StyledResultMessage>
          )}
        </form>
      </StyledLoginForm>
    </StyledLoginFormWrap>
  );
};
