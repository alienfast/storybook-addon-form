const reactLibs = ['react', 'react-dom', '@types/react', '@types/react-dom']
module.exports = {
  packageFile: './package.json',
  packageManager: 'yarn',
  // react has to be 18.x for addons in Storybook 9
  // https://github.com/storybookjs/addon-kit/issues/84#issuecomment-3260519954
  target: (name) => (reactLibs.includes(name) ? 'minor' : 'latest'),
}
