const mongoose = require('mongoose')
const GymPokemonSchema = require('./gym-pokemon').schema
const Schema = mongoose.Schema

const gymDetailsSchema = mongoose.Schema({
  id: { type: String, index: true },
  url: String,
  name: String,
  description: String,
  team: Number,
  latitude: Number,
  longitude: Number,
  pokemon: [GymPokemonSchema],
  date: { type: Date, default: Date.now, index: true }
})

var GymDetails = mongoose.model('GymDetails', gymDetailsSchema)
module.exports = {
  schema: gymDetailsSchema,
  model: GymDetails
}
