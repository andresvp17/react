const { Schema, model } = require('mongoose')

const FavoriteSchema = new Schema({
  favorites: [String]
})

const Favorites = model('Favorites', FavoriteSchema)

module.exports = Favorites
