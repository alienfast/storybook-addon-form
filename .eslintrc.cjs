/* eslint-disable import/no-commonjs */
// require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['@alienfast'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  rules: {
    // this gets really messy in tsx and graphql when types are forced to any e.g. policies
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
}
