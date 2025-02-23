import eslintPluginTS from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTS,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];
