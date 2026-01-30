import { defineConfig } from 'eslint/config';
import base from './base';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default defineConfig([
  {
    plugins: {
      'react': reactPlugin,
    },
    extends: [
      base,
      reactHooksPlugin.configs['recommended-latest'],
      reactPlugin.configs.flat['recommended'],
    ],
    settings: {
      'import/resolver': {
        alias: {
          map: [['~', './src/']],
          extensions: ['.ts', '.js', '.tsx', '.jsx'],
        },
      },
    },
    rules: {
      // @NOTE: We decided against prop validations
      'react/prop-types': ['off'],

      // @NOTE: ОБЯЗАТЕЛЬНО нужно указывать все зависимости
      'react-hooks/exhaustive-deps': ['error'],
    },
  }
])
