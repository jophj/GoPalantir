const Promise = require('bluebird')
const Gym = require('../schemas/gym').model
const GymDetails = require('../schemas/gym-details').model

const trainerName = "AMindJoke"

function queryAllPresences(trainerName, callback) {
  GymDetails.aggregate([
    { $match: { "pokemon.trainer_name": trainerName } },
    {
      $group: {
        _id: '$id',
        name: {
          $first: "$name"
        },
        gym_id: {
          $first: "$id"
        }
      }
    },
  ])
    .exec(callback)
}

function queryGymDetailsHistory(gymId, callback) {
  GymDetails
    .find({ id: gymId })
    .sort({ date: -1 })
    .exec(callback)
}

const getAllPresences = Promise.promisify(queryAllPresences)
getAllPresences(trainerName).then((trainerPresences) => {
  getGymDetailsHistory(trainerPresences[6].gym_id).then((gymDetailsHistory) => {
    getTrainerEvents(trainerName, gymDetailsHistory)
  })
})
const getGymDetailsHistory = Promise.promisify(queryGymDetailsHistory)

function getTrainerEvents(trainerName, gymDetailsHistory) {
  let trainerEvents = [];
  let currentState = {
    presence: false
  }

  gymDetailsHistory.forEach((gymDetail) => {
    if (gymDetail.pokemon.find(p => p.trainer_name === trainerName)) {
      if (!currentState.presence) {
        trainerEvents.push(new TrainerEvent(TRAINER_EVENT_TYPE.entering, gymDetail))
        currentState.presence = true
      }
    }
    else {
      if (currentState.presence) {
        trainerEvents.push(new TrainerEvent(TRAINER_EVENT_TYPE.exiting, gymDetail))
        currentState.presence = false
      }
    }
  });

  return trainerEvents;
}

class TrainerHistory {
  constructor(trainerName) {
    this.trainerName = trainerName
  }
}

const TRAINER_EVENT_TYPE = {
  entering: 'entering',
  exiting: 'exiting'
}

class TrainerEvent {
  constructor(type, gymDetails){
    this.type = type
    this.gymDetails = gymDetails
  }
}

module.exports = TrainerHistory