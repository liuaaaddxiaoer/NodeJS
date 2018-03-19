const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const onerror = require('koa-onerror')
const OneTeacher = require('./oneTeacher')
require('babel-register')
// 错误处理
onerror(app)
// 路由
app.use(router.routes())
app.use(router.allowedMethods())
// 

router.get('/', (ctx,next) => {
    OneTeacher.recommendGroup()
    ctx.body = ctx.query.name
    // console.dir(ctx)

})
app.listen(3000)

