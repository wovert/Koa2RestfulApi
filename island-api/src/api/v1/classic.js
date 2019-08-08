const routerClassic = require('koa-router')()

routerClassic.get('/v1/classic/latest', (ctx, next) => {
  ctx.body = { key: 'classic' }
})

module.exports = routerClassic
