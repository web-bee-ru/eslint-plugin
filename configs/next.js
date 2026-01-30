import { defineConfig } from 'eslint/config';
import react from './react';

export default defineConfig([
  {
    extends: [react],
  },
]);