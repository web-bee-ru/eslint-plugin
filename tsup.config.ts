import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['configs/**/*.js'],
  clean: true,
  skipNodeModulesBundle: true,
  format: ['cjs', 'esm'],
  onSuccess: 'tsc',
  splitting: false,
  cjsInterop: true,
  esbuildOptions: (options) => {
    // *.cjs конфиги (в dist) имеют экспорт вида module.exports.default что не допустимо для eslint
    // cjsInterop: true должен решать эту проблему, но походу он не работает
    if (options.format === 'cjs') {
      options.footer = {
        js: 'module.exports = module.exports.default;',
      }
    }
  }
})