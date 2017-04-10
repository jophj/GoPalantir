const mongoose = require('mongoose')
const GymPokemonSchema = require('./gym-pokemon').schema
const Schema = mongoose.Schema

const gymSchema = mongoose.Schema({
  id: String,
  url: String,
  name: String,
  description: String,
  team: Number,
  latitude: Number,
  longitude: Number,
  pokemon: [GymPokemonSchema]
})

var Gym = mongoose.model('Gym', gymSchema)
module.exports = {
  schema: gymSchema,
  model: Gym
}
