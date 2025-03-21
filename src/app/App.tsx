import { ThemeProvider } from 'styled-components';
import { LoginForm } from ':components/LoginForm';
import { CenteredLayout } from ':ui/CenteredLayout';
import { lightTheme } from ':theme';
import { AppGlobalStyles } from './AppGlobalStyles';

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppGlobalStyles />
      <CenteredLayout>
        <LoginForm />
      </CenteredLayout>
    </ThemeProvider>
  );
};
