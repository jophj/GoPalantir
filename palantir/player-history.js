const Promise = require('bluebird')
const Gym = require('../schemas/gym').model
const GymDetails = require('../schemas/gym-details').model

const trainerName = "AMindJoke"

function queryAllPresences(callback) {
  GymDetails.aggregate([
    { $match: { "pokemon.trainer_name": trainerName } },
    {
      $group: {
        _id: '$id',
        name: {
          $first : "$name"
        },
        gym_id: {
          $first : "$id"
        }
      }
    },
  ])
    .exec(callback)
}

function queryGymDetailsHistory(gymId, callback) {
  GymDetails
    .find({ id: gymId})
    .exec(callback)
}

const getAllPresences = Promise.promisify(queryAllPresences)
getAllPresences().then((data) => {
  console.log(data)
})
const getGymDetailsHistory = Promise.promisify(queryGymDetailsHistory)
getGymDetailsHistory("OGIyMmIzODcyNGJiNDEwYzk1NWQ3Mzk0ZjU5ZDk0OTEuMTY=").then( (data) => {
  console.log(data)
})

class TrainerHistory {
  constructor(trainerName) {
    this.trainerName = trainerName
  }
}

module.exports = TrainerHistory