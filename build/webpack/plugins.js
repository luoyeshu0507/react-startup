const path = require('path')
const pkg = require('../../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development' ? true: false

module.exports = {
  UglifyJSPlugin: new UglifyJSPlugin({
    parallel: true,
    uglifyOptions: {
      ie8: false,        
      beautify: false,
      mangle: true,
      compress: {
        unused: true,
        dead_code: true,
        // Suppress uglification warnings
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        sequences: true,
        booleans: true,
        pure_getters: true,
        unsafe_comps: true,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true,
      },
      output: {
        comments: false
      },
      // skip pre-minified libs
      exclude: [/\.min\.js$/gi]
    }
  }),

  HtmlWebpackPlugin: {
    app: new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../public/index.ejs'),
      filename: 'index.html',
      title: pkg.title,
      inject: true,
      chunks: isDev ? ['app'] : ['common', 'vendor', 'app'],
      chunksSortMode: (c1, c2) => {
        const orders = ['common', 'vendor', 'app']
        const o1 = orders.indexOf(c1.names[0])
        const o2 = orders.indexOf(c2.names[0])
        return o1 - o2
      }
    })
  },

  CompressionWebpackPlugin: new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
}