const pkg = require('../package.json')
const Koa = require('koa')
const path = require('path')
const proxy = require('koa-proxies')
const app = new Koa()
const logger = require('koa-logger')
const fs = require('fs')

const Router = require('koa-router')

const isDev = process.env.NODE_ENV === 'development'? true: false
const isProd = process.env.NODE_ENV === 'production'? true: false
const port = process.env.PORT || 3000
const proxyTable = require('./middleware/proxy')

const router = new Router()

// replace antd font path
const antdThemeFile = './node_modules/antd/lib/style/themes/default.less'
fs.readFile(antdThemeFile, 'utf8', function(err, data){
  if(err)
    console.log("找不到文件: " + antdThemeFile);
  else {
    const str = data.replace(/\"https:\/\/at\.alicdn\.com[^"]+\"/, '"../../../../../src/style/anticon/iconfont"')
    fs.writeFile(antdThemeFile, str, 'utf8', function(err){});
  }
});

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())

// if (isProd) app.use(require('./middleware/auth'))

proxyTable.forEach(item => {
  app.use(
    proxy(item.path, {
      target: item.target,
      changeOrigin: true,
      logs: isDev,
      rewrite: path => path.replace(/\/api/, '/api/v1')
    })
  )
})

app.use(
    require('koa-connect-history-api-fallback')()
  )

if (isDev) require('./middleware/dev')(app)
if (isProd) require('./middleware/prod')(app)

app.use(require('koa-favicon')('./public/favicon.ico'))

app.listen(port, '0.0.0.0', err => {
  if (err) console.log(err)
  console.log(`${pkg.name} is starting at http://localhost:${port}`)
})
