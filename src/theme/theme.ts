import { spacing } from './spacing';

export const lightTheme = {
  baseFontSize: '14px',
  baseFontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  baseLineHeight: '1.3',
  colors: {
    text: '#3a3a3a',
    appBackground: '#f8f8f8',
    light: '#fff',
  },
  dangerColor: '#ff3b30',
  successColor: '#12B76A',
  linkColor: '#549eff',
  linkColorHover: '#0071ff',
  uiFontSize: '16px',
  uiHeight: '48px',
  uiRadius: '6px',
  uiInlineGap: spacing(4),
  uiDisabledOpacity: 0.4,
  inputBg: '#f5f7f8',
  inputBgHover: '#eef1f3',
  inputBgFocus: '#fbfbff',
  inputBorderFocus: '#D6BBFB',
  buttonBg: '#c699ff',
  buttonBgHover: '#e0adfd',
  buttonBgActive: '#9E77ED',
  buttonColor: '#fff',
  dangerBorderColor: '#ff3b30',
  transitionDuration: '.3s',
  transitionEasing: 'cubic-bezier(0.33, 1, 0.68, 1)', // easeOutCubic
};

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
