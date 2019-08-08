const routerBook = require("koa-router")()

routerBook.get('/v1/book/latest', (ctx, next) => {
  ctx.body = { key: "book" }
})

module.exports = routerBook