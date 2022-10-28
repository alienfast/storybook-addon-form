module.exports = {
  packageFile: ['./package.json', './packages/*/package.json'],
  packageManager: 'yarn',
  reject: [
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
  ],
  // target: (name: string, versionRange: SemVer[]) => string
  target: (name) =>
    name === 'yup' ? '@next' : name.startsWith('@storybook/') ? '@next' : 'latest',
}
