// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// your app's webpack.config.js
// const custom = require('../webpack.common.js');
const dev = require('../webpack.dev.js');

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        // {
        //   loader: require.resolve('awesome-typescript-loader'),
        // },
        //Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ]
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            parser: 'typescript',
            uglyCommentsRegex: [/^tslint-.*/, /^global.*/],
            prettierConfig: {
              printWidth: 80,
              singleQuote: false,
            },
          },
        },
      ],
      enforce: 'pre',
    })
  config.resolve.extensions.push('.ts', '.tsx');
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};