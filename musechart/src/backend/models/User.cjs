const { Schema, model } = require('mongoose')

const UserChema = new Schema({
  username: String,
  password: String,
  favorites: [String],
  playlists: [{
    type: Schema.Types.ObjectId,
    ref: 'Playlists'
  }]
})

const User = model('User', UserChema)

module.exports = User
