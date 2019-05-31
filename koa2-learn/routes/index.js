const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  const start = new Date().getTime()
  global.console.log('index start:', start)

  ctx.cookies.set('pvid', Math.random()) // 写 cookie

  const a = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async a\n')
      resolve('a')
    }, 2000)
  })
  
  const b = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async b\n')
      resolve('b')
    }, 3000)
  })

  const c = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async c\n')
      resolve('c')
    }, 1000)
  })

  console.log('async d\n')
  const d = await Promise.resolve('d')
  // global.console.log('a=',a, ', b=', b, ',c=', c, '\n')
  const end = new Date().getTime()
  global.console.log('index end:', end)
  global.console.log('index duration:', (end - start))
  await ctx.render('index', {
    title: `Hello Koa 2\\n
    a=${a}\\n
    b=${b}\\n
    c=${c}\\n
    d=${d}\\n
    运行时间：${end - start} 毫秒`
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookie: ctx.cookies.get('pvid') // 读取cookie
  }
})

module.exports = router
