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
  "rules": {
    "indent"           : [1, 2,],
    "semi"             : [1, "never"],
    "space-unary-ops"  : 2
  }
};