const Koa = require('koa')
const book = require('./api/v1/book')
const classic = require('./api/v1/classic')
const port = 3000
const app = new Koa()

//////////////////////////////////////////////////////
//////////// Register router /////////////////////////
app.use(book.routes())
app.use(classic.routes())
//////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  console.log('Press CTRL-C to stop \n')
})

