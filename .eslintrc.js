module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ["cypress/**/*", "**/vendor/*.js"],
  rules: {
    "indent"           : [1, 2,],
    "semi"             : [1, "never"],
    "space-unary-ops"  : 2,
    "@typescript-eslint/explicit-module-boundary-types": 0
  }
};