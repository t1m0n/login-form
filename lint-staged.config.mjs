const config = {
  '**/*/src/**/*.{ts,tsx}': [
    'prettier --write',
    'eslint --fix --cache --cache-location ./node_modules/.eslintcache',
  ],
};

export default config;
