const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  const a = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('a............')
    }, 2000)
  })
  
  const b = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('b............')
    }, 3000)
  })

  const c = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('c............')
    }, 1000)
  })

  global.console.log('index page................')
  global.console.log('a=',a, ', b=', b, ',c=', c)
  await ctx.render('index', {
    title: 'Hello Koa 2.........!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
