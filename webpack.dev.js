const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {DefinePlugin} = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ],
});
