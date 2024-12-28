import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
    settings: {
      next: {
        rootDir: '.',
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      'plugin:@next/next/recommended',
      'plugin:@next/next/core-web-vitals',
    ],
  },
];