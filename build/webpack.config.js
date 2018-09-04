const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const isDev = process.env.NODE_ENV === 'development' ? true: false
const isProd = process.env.NODE_ENV === 'production' ? true: false
const PORT = process.env.PORT || 3000

const { distPath } = require('./config')
const srcPath = path.resolve(__dirname, '../src')
const ExtractText = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const sassLoaders = module => {
  return [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        module,
        importLoaders: 2,
        localIdentName: '[local]__[hash:base64:5]'
      }
    },
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
        includePaths: [path.join(__dirname, '../node_modules/predix-ui-in-react/bower_components')]
      }
    }
  ]
}

const cssLoaders = ['style-loader', 'css-loader', 'postcss-loader']

const lessLoaders = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2
    }
  },
  'postcss-loader',
  {
    loader: 'less-loader'
  }
]

const webpackConfig = {
  // devtool: '#inline-source-map',
  entry: {},
  output: {
    path: distPath,
    publicPath: isDev ? `http://localhost:${PORT}/` : '/',
    chunkFilename: 'chunk.[name].[chunkhash:5].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: isDev,
      __PRO__: isProd
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
  resolve: {
    alias: {
      '#': srcPath,
      components: path.resolve(srcPath, 'components'),
      stores: path.resolve(srcPath, 'stores'),
      style: path.resolve(srcPath, 'style'),
      doc: path.resolve(__dirname, 'doc')
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.svg']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-0'],
            plugins: [
              "transform-decorators-legacy",
              "transform-object-assign"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        loader: isProd
          ? ExtractText.extract({
              use: cssLoaders.slice(1)
            })
          : cssLoaders
      },
      {
        test: /\.scss$/,
        include: [/node_modules/, /src\/styles/],
        loader: isProd
          ? ExtractText.extract({
              use: sassLoaders(false).slice(1)
            })
          : sassLoaders(false)
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /src\/styles/],
        loader: isProd
          ? ExtractText.extract({
              use: sassLoaders(true).slice(1)
            })
          : sassLoaders(true)
      },
      {
        test: /\.less$/,
        loader: isProd
          ? ExtractText.extract({
              use: lessLoaders.slice(1)
            })
          : lessLoaders
      },
      // {
      //   test: /\.svg$/,
      //   include: /predix-ui-in-react\//,
      //   use: [
      //     'babel-loader',
      //     {
      //       loader: 'svgr/webpack',
      //       options: {
      //         replaceAttrValues: [['#4c6472', 'currentColor']],
      //         title: false,
      //         icon: true
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif|ico|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'app/assets/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'app/fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader"
          }
        ]
      }
    ]
  }
}

module.exports = webpackConfig
