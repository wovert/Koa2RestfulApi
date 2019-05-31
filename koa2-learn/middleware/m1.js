function m1(ctx) {
  global.console.log('::::::::m1::::::::\n')
}

module.exports = function() {
  return async function(ctx, next) {
    global.console.log('::::::::m1 START::::::::\n')
    m1(ctx)
    await next() // 继续处理下一个中间件
    global.console.log('::::::::m1 END::::::::\n')
  }
}