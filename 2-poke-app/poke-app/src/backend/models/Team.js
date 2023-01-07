const { Schema, model } = require('mongoose')

const teamSchema = new Schema({
  teamName: String,
  pokemonIDs: [Number],
  userInfo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Team = model('Team', teamSchema)

module.exports = Team
