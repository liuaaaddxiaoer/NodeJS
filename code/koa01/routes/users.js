const Router = require('koa-router')
const router = new Router()
const koa = require('koa')
const mongosee = require('mongoose')


router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/name',async function(ctx,next) {
  console.log(JSON.stringify(ctx.query) + `${__filename}`)
  // console.log(__filename)
  ctx.body = ctx.query
})

module.exports = router
