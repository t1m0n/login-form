import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  base: 'login-form',
  resolve: {
    alias: {
      ':ui': path.resolve(__dirname, './src/ui'),
      ':components': path.resolve(__dirname, './src/components'),
      ':theme': path.resolve(__dirname, './src/theme/index'),
      ':utils': path.resolve(__dirname, './src/utils'),
      ':hooks': path.resolve(__dirname, './src/hooks'),
      ':api': path.resolve(__dirname, './src/api'),
      ':public': path.resolve(__dirname, './public'),
    },
  },
});
