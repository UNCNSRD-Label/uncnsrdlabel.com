const env = require('dotenv').config().parsed
const path = require('path')

const aliases = {
  '#/atoms': path.resolve(__dirname, '../components/_atoms'),
  '#/molecules': path.resolve(__dirname, '../components/_molecules'),
  '#/organisms': path.resolve(__dirname, '../components/_organisms'),
  '#/templates': path.resolve(__dirname, '../components/_templates'),
  '#/shared': path.resolve(__dirname, '../components/_shared'),
  // Needs to be last
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
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        cssLoaderOptions: {
          importLoaders: 1,
          modules: {
            localIdentName: '[local]',
          },
        },
      },
    },
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
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return config
  },
}
