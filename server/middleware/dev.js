const webpack = require('webpack')
const webpackConfig = require('../../build/webpack.dev')
const DashboardPlugin = require('webpack-dashboard/plugin')

const compiler = webpack(webpackConfig)
compiler.apply(new DashboardPlugin())

module.exports = app => {
  app.use(require('koa-webpack')({
    compiler,
    dev: {
      noInfo: true,
      quiet: false,
      stats: {
        colors: true,
        modules: false
      }
    },
    hot: {
      reload: true,
      log: () => {}
    }
  }))
}