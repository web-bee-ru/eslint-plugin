const reactPlugin = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...require("./base"),
  reactPlugin.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  {
    settings: {
      "import/resolver": {
        alias: {
          map: [["~", "./src/"]],
          extensions: [".ts", ".js", ".tsx", ".jsx"],
        },
      },
    },
    rules: {
      // @NOTE: We decided against prop validations
      "react/prop-types": ["off"],
      // @NOTE: ОБЯЗАТЕЛЬНО нужно указывать все зависимости
      "react-hooks/exhaustive-deps": ["error"],
    },
  },
];
