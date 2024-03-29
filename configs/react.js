module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
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
  overrides: [
    // Components
    {
      files: ['src/**/*.tsx', 'src/**/*.jsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              pascalCase: true,
            },
          },
        ],
      },
    },
    // React Hooks (use methods)
    {
      files: ['src/**/Use*.ts', 'src/**/use*.ts', 'src/**/Use*.js', 'src/**/use*.js'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
            },
          },
        ],
      },
    },
    // React HOC components (withHOC)
    {
      files: ['src/**/With*.ts', 'src/**/with*.ts', 'src/**/With*.js', 'src/**/with*.js'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
            },
          },
        ],
      },
    },
  ],
};
