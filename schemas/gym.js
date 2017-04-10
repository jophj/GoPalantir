const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gymSchema = mongoose.Schema({
  team_id: Number,
  gym_points: Number,
  last_modified: Number,
  latitude: Number,
  longitude: Number,
  guard_pokemon_id: Number,
  enabled: Boolean,
  gym_id: String
})

var Gym = mongoose.model('Gym', gymSchema)
module.exports = {
  schema: gymSchema,
  model: Gym
}
