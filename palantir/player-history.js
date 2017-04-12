const Promise = require('bluebird')
const Gym = require('../schemas/gym').model
const GymDetails = require('../schemas/gym-details').model

const trainerName = "ZioTrave"

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

const getAllPresences = Promise.promisify(queryAllPresences)
getAllPresences().then((data) => {
  console.log(data)
})

class TrainerHistory {
  constructor(trainerName) {
    this.trainerName = trainerName
  }
}

module.exports = TrainerHistory