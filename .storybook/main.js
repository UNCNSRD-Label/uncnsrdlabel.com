const env = require('dotenv').config().parsed
const path = require('path')

const aliases = {
  '#': path.resolve(__dirname, '../'),
}

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true, // 👈 Disables telemetry
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y/register',
    '@storybook/theming',
    'storybook-addon-next-router',
  ],
  features: {
    postcss: false,
  },
  staticDirs: ['../public'],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: false,
    check: false,
  },
  env: (config) => ({
    ...config,
    ...env,
  }),
  webpackFinal: async (config) => {
    Object.assign(config.resolve.alias, aliases)

    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            implementation: require.resolve('postcss'),
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    return config
  },
}
