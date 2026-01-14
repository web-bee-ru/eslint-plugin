const js = require("@eslint/js");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const importPlugin = require("eslint-plugin-import");
const prettier = require("eslint-config-prettier");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["~", "./src/"]],
          extensions: [".ts", ".js"],
        },
      },
    },
  },
  js.configs.recommended,
  ...tsPlugin.configs["flat/recommended"],
  importPlugin.flatConfigs.errors,
  importPlugin.flatConfigs.warnings,
  importPlugin.flatConfigs.typescript,
  prettier,
  {
    rules: {
      quotes: ["error", "single"],
      "object-curly-newline": ["off"], // не понял глубокого смысла этого правила...
      "prefer-destructuring": ["off"], // сложно искать работу с частями ДТОшек
      "global-require": ["off"], // не актуально для вебпака
      "quote-props": ["error", "consistent-as-needed"],
      "no-plusplus": ["off"], // потому что WTF?!
      "arrow-body-style": ["off"], // проще ставить бряки если есть скобочки, пусть они и не нужны
      "consistent-return": ["off"], // функции не всегда возвращают значение
      "no-param-reassign": ["error", { props: false }], // потому что reduce
      "no-useless-return": ["off"], // потому что идите в жопу. Пишу как хочу, из-за этого не сломается
      "arrow-parens": ["off"], // зачем оборачивать то, что не нужно?
      eqeqeq: ["warn", "always", { null: "ignore" }], // в Airbnb был error
      "space-before-function-paren": ["off"], // конфликтует с prettier
      "func-names": ["error", "never"], // зачем давать имена анонимным функциям? о_О
      "linebreak-style": ["off"],
      "no-trailing-spaces": ["error"],
      "eol-last": ["error"],
      "no-console": ["error", { allow: ["warn", "error", "info"] }], // варны и эрроры и инфо - ок
      "no-debugger": ["error"],
      "no-unused-vars": ["warn", { args: "none" }], // просто переменные - error, аргументы в методе - норм.
      "prefer-const": ["off"],
      "max-len": ["off"],
      "space-infix-ops": ["off"],
      "import/extensions": ["off"],
      "import/no-unresolved": ["off"],
      "no-restricted-syntax": ["off"],
      "no-else-return": ["off"],
      "no-lonely-if": ["off"],
      semi: ["off"],
      "comma-dangle": ["error", "always-multiline"],
      "brace-style": ["off", "stroustrup", { allowSingleLine: true }],
      // @NOTE: TS
      "@typescript-eslint/ban-types": ["off"],
      "@typescript-eslint/no-namespace": ["off"],
      "@typescript-eslint/ban-ts-comment": ["off"],
      // @NOTE: imports
      "import/prefer-default-export": ["off"],
      "import/no-cycle": ["warn"],
      "import/namespace": ["off"],
    },
  },
];
