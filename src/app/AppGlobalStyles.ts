import { createGlobalStyle } from 'styled-components';

export const AppGlobalStyles = createGlobalStyle`
  .pacifico-regular {
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-style: normal;
  }
  
  :root {
    font-family: ${({ theme }) => theme.baseFontFamily};
    line-height: ${({ theme }) => theme.baseLineHeight};
    font-weight: 400;

    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.appBackground};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    min-height: 100%;
  }
`;
