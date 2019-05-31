function m3(ctx) {
  global.console.log('::::::::m3::::::::\n')
}

module.exports = function() {
  return async function(ctx, next) {
    global.console.log('::::::::m3 START::::::::\n')
    m3(ctx)
    await next() // 继续处理下一个中间件
    global.console.log('::::::::m3 END::::::::\n')
  }
}