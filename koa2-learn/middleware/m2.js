function m2(ctx) {
  global.console.log('::::::::m2::::::::\n')
}

module.exports = function() {
  return async function(ctx, next) {
    global.console.log('::::::::m2 START::::::::\n')
    m2(ctx)
    await next() // 继续处理下一个中间件
    global.console.log('::::::::m2 END::::::::\n')
  }
}