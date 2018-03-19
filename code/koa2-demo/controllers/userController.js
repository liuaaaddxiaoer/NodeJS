

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db1')

const db = mongoose.connection



class UserController {

  static async register(ctx,next) {
    const Schema =  mongoose.Schema({
       username: String,
       password: String
     })
     const Model = mongoose.model('login',Schema)
     const user1 = new Model({
       username: ctx.query.username,
       password: ctx.query.password
     })
     user1.save(() => {

     })

  }
  static async login(ctx, next) {
    const Schema =  mongoose.Schema({
      username: String,
      password: String
    })
    try {
      const Model = mongoose.model('login',Schema)
      Model.find().exec(function(err,models) {
        models.map((item,idx)=> {
          console.dir(item)
        })
      })
    }catch (error) {
      console.log(error)
    }
  }

}

export default UserController;