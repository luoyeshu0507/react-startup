const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const { isDev, isProd } = require('../common/utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    chunkFilename: 'app/chunk/[name]/[name].js'
  },
  plugins: [
    
  ]
})