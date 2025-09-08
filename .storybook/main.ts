import { defineMain } from '@storybook/react-vite/node'

const config = defineMain({
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', './local-preset.mjs'],
  framework: '@storybook/react-vite',
})

export default config

// import type { StorybookConfig } from '@storybook/react-vite'
// const config: StorybookConfig = {
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//     './local-preset.cjs',
//   ],
//   // logLevel: "debug",
//   framework: { name: '@storybook/react-vite', options: {} },
//   docs: {
//     // autodocs: 'tag'
//   },
// }
// export default config

// // NOTE see https://github.com/storybookjs/addon-kit for example
