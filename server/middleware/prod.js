const conditional = require('koa-conditional-get')
const etag = require('koa-etag')
const compress = require('koa-compress')
const kStatic = require('koa-static')
const logger = require('koa-logger')

const config = require('../../build/config')

module.exports = app => {
  app.use(logger())
  .use(conditional())
  .use(etag())
  .use(compress())
  .use(kStatic(config.distPath, {
    maxage: 1000 * 60 * 15
  }))
}
