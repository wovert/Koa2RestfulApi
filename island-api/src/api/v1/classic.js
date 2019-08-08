const Router = require('koa-router')
const router = Router()

router.get('/v1/classic/latest', (ctx, next) => {
  ctx.body = { key: 'classic' }
})

module.exports = router
