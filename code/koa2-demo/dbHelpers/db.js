
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/db1')
const db = mongoose.connection

console.log(db)

db.on('error',function(error) {
  console.log('数据库连接失败')
})

db.on('open',  function() {
  console.log('数据库连接成功')
})

db.on('disconnected', function() {
  console.log('数据库关闭')
})

// 创建Schema
const userSchema = mongoose.Schema({
  name: String,
  height: Number,
  desc: String
})
// 创建模型
const userModel = mongoose.model('user',userSchema)
// 生成document
const xiaoer = new userModel({
  name: 'xiaoer',
  height: 175,
  desc: 'iOS'
})
// 保存
xiaoer.save((err,xiaoer)=>{
  console.log(err)
})