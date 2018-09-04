const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
const ExtractText = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development' ? true: false
const isProd = process.env.NODE_ENV === 'production' ? true: false
const { plugins } = require('./webpack')
const path = require('path')

module.exports = merge.smart(webpackConfig, {
  entry: {
    vendor: [
      'react',
      'mobx',
      'echarts/lib/echarts'
    ],
    'app': './src/index.jsx'
  },
  devtool: false,
  output: {
    filename: 'app/[name].[hash].js',
    chunkFilename: 'app/chunk/[name].[chunkhash:5].chunk.js'
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: path.join(__dirname, '..')
    }),
    new ExtractText({
      filename: 'app/app.[hash].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),
    plugins.HtmlWebpackPlugin.app,
    plugins.UglifyJSPlugin,
    plugins.CompressionWebpackPlugin,
  ]
})