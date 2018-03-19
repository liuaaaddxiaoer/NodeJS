var Koa = require('koa');
var app = new Koa();

const router = require('./routes')

router.get('/', (ctx, next) => {
  ctx.body = 'nihao';
});



app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);