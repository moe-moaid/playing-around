import { dirname } from 'path';
import { fileURLToPath } from 'url';

import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import hooksPlugin from 'eslint-plugin-react-hooks';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  /**
   * ESLint Configuration
   *
   * Extends the recommended configuration and adds global variables.
   * @see https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
   */
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },

  /**
   * TypeScript ESLint Configuration
   *
   * Extends the recommended configuration with type-checking.
   *
   * Must override base ESLine rules after extending
   * `recommendedTypeChecked`, because some of them are set to 'error'
   * in that configuration.
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-type-checked-only.ts
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts
   */
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'no-empty': ['error', { allowEmptyCatch: true }],
      'prefer-const': 'off',
      'array-callback-return': 'error',
      'no-console': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        // This is required since the autogenerated Typescript types
        // will fail this rule otherwise
        { allowInterfaces: 'always' },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
        },
      ],
    },
  },

  /**
   * Disable Type-aware Rules for JavaScript Files
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/disable-type-checked.ts
   */
  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },

  /**
   * Import Plugin Configuration
   *
   * Extends the recommended configuration. While following the
   * recommendations outlined in the TypeScript ESlint performacnce
   * guide.
   *
   * @see https://typescript-eslint.io/troubleshooting/performance-troubleshooting/#eslint-plugin-import
   * @see https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
   */
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { import: importPlugin },
    settings: {
      ...importPlugin.configs.recommended.settings,
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          project: 'tsconfig.json',
        },
      },
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'import/default': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/no-unresolved': 'off',
    },
  },

  /**
   * React & JSX Accessibility Configuration
   *
   * Extends the recommended configuration.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js
   */
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      ...reactRecommended.plugins,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      ...reactRecommended.rules,
      'react/display-name': 'off',
      'react/jsx-key': 'off',
      'react/no-children-prop': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      ...jsxA11yPlugin.configs.recommended.rules,
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/mouse-events-have-key-events': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
    },
    settings: { react: { version: 'detect' } },
  },

  /**
     * React Hooks Configuration

     * @see https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js
     */
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { 'react-hooks': hooksPlugin },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'error',
    },
  },

  /**
   * Prettier Configuration
   *
   * Disables all stylistic rules that may conflict with Prettier.
   * @see https://github.com/prettier/eslint-config-prettier/blob/main/index.js
   */
  prettier,
];
