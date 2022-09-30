import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  logLevel: 'debug',
  addons: ["../manager.js", "@storybook/addon-essentials"],
  core: {
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  // staticDirs: ['../public'],
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
    breakingChangesV7: true,
  },
  framework: '@storybook/react-vite',
}

export default config
