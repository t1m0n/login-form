import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-shadow': 'error',
      'no-console': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/quotes': ['error', 'single'],

      'react/jsx-curly-brace-presence': 'error',
      'react/react-in-jsx-scope': 'off',

      'import/no-named-as-default': 'off',
      'import/no-unresolved': 'off',
      'import/no-default-export': 'error',
      'import/no-cycle': 2,
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: ':components/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: ':ui/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: ':theme',
              group: 'internal',
              position: 'before',
            },
          ],
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
);
