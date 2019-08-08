const Koa = require('koa')
const Router = require('koa-router')
const rd = require('require-directory')

const port = 3000
const app = new Koa()

// const book = require('./api/v1/book')
// const classic = require('./api/v1/classic')
// app.use(book.routes())
// app.use(classic.routes()) 

rd(module, './api', {
  visit: function (obj) {
    if (obj instanceof Router) {
      app.use(obj.routes())
    }
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  console.log('Press CTRL-C to stop \n')
})

