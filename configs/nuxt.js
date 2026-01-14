/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...require("./vue"),
  {
    settings: {
      "import/resolver": "nuxt",
    },
  },
];
