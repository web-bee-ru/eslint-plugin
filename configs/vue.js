import { defineConfig } from 'eslint/config';
import base from './base';
import vuePlugin from 'eslint-plugin-vue';

export default defineConfig([
  {
    plugins: {
      'vue': vuePlugin,
    },
    extends: [
      base,
      vuePlugin.configs['flat/strongly-recommended'],
    ],
    settings: {
      'import/resolver': {
        alias: {
          map: [['~', './src/']],
          extensions: ['.ts', '.js', '.tsx', '.jsx', '.vue'],
        },
      },
    },
    rules: {
      'vue/max-attributes-per-line': ['off'],
      'vue/attribute-hyphenation': ['off'],
      'vue/html-self-closing': ['off'],

      'vue/script-indent': ['off'],
    },
  },
  {
    files: ['src/**/*.vue'],
    rules: {
      'vue/html-indent': ['error', 2, {
        alignAttributesVertically: false,
        closeBracket: 1,
      }],
      'vue/script-indent': ['error', 2, {
        baseIndent: 1,
        switchCase: 1,
      }],
    },
  }
])

