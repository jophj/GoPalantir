const mongoose = require('mongoose')
const GymPokemonSchema = require('./gym-pokemon').schema
const Schema = mongoose.Schema

const gymDetailsSchema = mongoose.Schema({
  id: String,
  url: String,
  name: String,
  description: String,
  team: Number,
  latitude: Number,
  longitude: Number,
  pokemon: [GymPokemonSchema],
  date: { type: Date, default: Date.now }
})

var GymDetails = mongoose.model('GymDetails', gymDetailsSchema)
module.exports = {
  schema: gymDetailsSchema,
  model: GymDetails
}
