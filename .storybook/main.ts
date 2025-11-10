import { defineMain } from '@storybook/react-vite/node'

const config = defineMain({
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', import.meta.resolve('./local-preset.ts')],
  framework: '@storybook/react-vite',
  core: {
    disableWhatsNewNotifications: true, // Add this line to disable the popup
  },
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
