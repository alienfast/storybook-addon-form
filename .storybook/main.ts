import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  logLevel: 'debug',
  addons: ["../manager.js", "@storybook/addon-essentials"],
  // add monorepo root as a valid directory to import modules from
  webpackFinal: (config) => {
    const resolvePlugins = config.resolve?.plugins;
    if (Array.isArray(resolvePlugins)) {
      resolvePlugins.forEach((p) => {
        // @ts-ignore
        const appSrcs = p.appSrcs as unknown as string[];
        if (Array.isArray(appSrcs)) {
          appSrcs.push(path.join(__dirname, '..', '..', '..'));
        }
      });
    }
    return config;
  },
  core: {
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  // staticDirs: ['../public'],
  features: {
    buildStoriesJson: true,
    breakingChangesV7: true,
  },
  framework: '@storybook/react-webpack5',
}

export default config
