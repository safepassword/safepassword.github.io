module.exports = {
  extends: ["react-app", "prettier"],
  rules: {
    semi: [2, "never"],
    "arrow-body-style": 0,
    "no-const-assign": "error",
    eqeqeq: "error",
    curly: "error",
    strict: "error",
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "eslint-config-hapi": 0,
    "no-const-assign": "error",
    "no-unused-vars": [2, { vars: "all", args: "none" }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "keyword-spacing": "error",
    "comma-spacing": "error",
    "comma-dangle": ["error", "always-multiline"],
    quotes: ["error", "single"],
    "space-infix-ops": "error"
  }
};
