const GymDetails = require('./schemas/gym-details.js').model
const GymPokemon = require('./schemas/gym-pokemon.js').model

const gymDetailsMiddleware = function (req, res, next) {
  const message = req.body;
  if (message.type == 'gym_details') {
    let gymUpdate = new GymDetails(message.message)
    let gymPokemons = gymUpdate.pokemon.map( p => new GymPokemon(p))
    gymUpdate.save((err) => console.log(err || 'Gym details update saved ' + gymUpdate.id))
  }

  next()
}

module.exports = gymDetailsMiddleware
