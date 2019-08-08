const Koa = require('koa')

const book = require('./api/v1/book')
const classic = require('./api/v1/classic')

const app = new Koa()

let total = 0
for (let i = 0; i < 100; i++) {
  total += i
}

app.use(book.routes()) // register router
app.use(classic.routes()) // register router

const port = 3000

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  console.log('Press CTRL-C to stop \n')
});

