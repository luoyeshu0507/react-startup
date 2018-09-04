/**
 * https://github.com/michael-ciniawsky/postcss-load-config
 */

module.exports = ctx => ({
  plugins: [
    // to edit target browsers: use "browserlist" field in package.json
    require('autoprefixer')(),
    ctx.env === 'production' ? require('cssnano')({ preset: 'advanced', safe: true }) : false
  ]
})
