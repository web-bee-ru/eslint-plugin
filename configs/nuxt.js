import { defineConfig } from 'eslint/config';
import vue from './vue';

export default defineConfig([
  {
    extends: [vue],
    settings: {
      'import/resolver': 'nuxt',
    },
  },
]);
