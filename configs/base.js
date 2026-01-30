import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parser: tsEslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      '@stylistic': stylistic,
    },
    extends: [
      eslint.configs.recommended,
      tsEslint.configs.recommended,
      importPlugin.flatConfigs.errors,
      importPlugin.flatConfigs.warnings,
      importPlugin.flatConfigs.typescript,
      eslintPluginPrettierRecommended,
    ],
    settings: {
      "import/resolver": {
        alias: {
          map: [['~', './src/']],
          extensions: ['.ts', '.js'],
        },
      },
    },
    rules: {
      'no-param-reassign': ['error', { props: false }], // потому что reduce
      'eqeqeq': ['warn', 'always', { null: 'ignore' }], // в airbnb был error
      'func-names': ['error', 'never'], // зачем давать имена анонимным функциям? о_О

      'no-console': ['error', { allow: ['warn', 'error', 'info'] }], // варны и эрроры и инфо - ок

      'no-debugger': ['error'],
      'no-unused-vars': ['warn', { args: 'none' }], // просто переменные - error, аргументы в методе - норм.

      'prefer-const': ['off'],
      'import/no-unresolved': ['off'],

      // @NOTE: Too TS
      '@typescript-eslint/no-empty-object-type': ['off'],
      '@typescript-eslint/no-namespace': ['off'],
      '@typescript-eslint/ban-ts-comment': ['off'],

      // @NOTE: imports
      'import/no-cycle': ['warn'],
      'import/namespace': ['off'],

      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/eol-last': ['error'],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      }],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
      }],
      '@stylistic/semi': ['error', 'always'],
    },
  }
])