const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  user: String,
  password: String,
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }]
})

const User = model('User', UserSchema)

module.exports = User
