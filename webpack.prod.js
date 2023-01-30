const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const {DefinePlugin} = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        // https://github.com/terser-js/terser#compress-options
        terserOptions: {
          ecma: undefined,
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
    new WebpackPwaManifest({
      name: 'Progressive Web App temlapte',
      short_name: 'PWATemplate',
      description: 'Describe your Progressive Web App here',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      publicPath: '.',
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
