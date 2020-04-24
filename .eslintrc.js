module.exports = {
  parserOptions: {
    parser: "babel-eslint"
  },
  "extends":
    ["airbnb-base",
      'plugin:vue/recommended'],
  rules: {
    "no-plusplus": 'off',
    "import/no-unresolved": "off",
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
      },
      "svg": "always",
      "math": "always"
    }]
  },
};