const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gymPokemonSchema = mongoose.Schema({
  num_upgrades: Number,
  move_1: Number,
  move_2: Number,
  additional_cp_multiplier: Number,
  iv_attack: Number,
  iv_defense: Number,
  iv_stamina: Number,
  weight: Number,
  pokemon_id: Number,
  stamina_max: Number,
  cp_multiplier: Number,
  height: Number,
  stamina: Number,
  pokemon_uid: Number,
  trainer_name: String,
  trainer_level: Number,
  cp: Number
})

var GymPokemon = mongoose.model('GymPokemon', gymPokemonSchema)
module.exports = GymPokemon
