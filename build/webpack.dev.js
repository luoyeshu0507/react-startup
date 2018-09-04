const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { plugins } = require('./webpack')

module.exports = merge.smart(webpackConfig, {
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      'react-hot-loader/patch',
      './src/index.jsx'
    ]
  },
  output: {
    filename: 'app/[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
    plugins.HtmlWebpackPlugin.app
  ]
})