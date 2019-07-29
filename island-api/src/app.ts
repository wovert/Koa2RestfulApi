import * as Koa from "koa";

const app = new Koa(); // 应用程序对象

function test(ctx: any, next: any) {
  console.log("This is test function.");
  next();
}

// 注册中间件
app.use(test);

app.use(async (ctx, next) => {
  console.log("箭头函数1开始<<<<<<<<<");
  await next();
  console.log("箭头函数1结束>>>>>>>>>");
});

app.use(async (ctx, next) => {
  console.log("箭头函数2<<<<<<<<<");
  // const result = next();
  const result = await next();
  console.log("result:", result);
  console.log("箭头函数2结束>>>>>>>>>>");
});

app.use(async (ctx, next) => {
  console.log("箭头函数3<<<<<<<<<");
  return "箭头函数3";
  console.log("箭头函数3结束>>>>>>>>>>");
});

app.use(ctx => {
  ctx.body = "Hello world!!";
});

module.exports = app;
