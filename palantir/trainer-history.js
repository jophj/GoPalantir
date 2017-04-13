'use strict';
/**
 * Trainer history module. Usage:
 * 
 * getTrainerHistory(trainerName).then(e => console.log(e.map(e => ({
 *   trainerName: e.trainerName,
 *   type: e.type,
 *   gymName: e.gymDetails.name,
 *   date: e.gymDetails.dat
 * }))))
 */

const Promise = require('bluebird')
const GymDetails = require('../schemas/gym-details').model

const TRAINER_EVENT_TYPE = {
  entering: 'entering',
  exiting: 'exiting'
}

const trainerEventDateComparer = (a, b) => a.gymDetails.date.getTime() > b.gymDetails.date.getTime()
const gymDetailsDateComparer = (a, b) => a.date.getTime() > b.date.getTime()

function getAllPresences(trainerName, callback) {
  let promise = new Promise((resolve, reject) => {
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
      .exec((err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
  })
  return promise
}

function getGymDetailsHistory(gymId) {
  let promise = new Promise((resolve, reject) => {
    GymDetails
      .find({ id: gymId })
      .sort({ date: -1 })
      .exec((err, data) => {
        if (err) reject(err)
        else resolve(data.sort(gymDetailsDateComparer))
      })
  })
  return promise
}

function getTrainerHistory(trainerName) {
  const promiseToReturn = new Promise(function (mainResolve) {
    getAllPresences(trainerName).then((trainerPresences) => {
      let trainerEvents = [];
      let promises = trainerPresences.map(tp => {
        return new Promise(function (resolve) {
          getGymDetailsHistory(tp.gym_id).then((gymDetailsHistory) => {
            resolve(getTrainerEvents(trainerName, gymDetailsHistory))
          })
        })
      })

      Promise.each(promises, (v) => {
        trainerEvents.push(...v)
      })
        .then(() => {
          mainResolve(trainerEvents.sort(trainerEventDateComparer))
        })
    })
  })

  return promiseToReturn;
}

function getTrainerEvents(trainerName, gymDetailsHistory) {
  let trainerEvents = [];
  let currentState = {
    presence: false
  }

  gymDetailsHistory.forEach((gymDetail) => {
    if (gymDetail.pokemon.find(p => p.trainer_name === trainerName)) {
      if (!currentState.presence) {
        trainerEvents.push(new TrainerEvent(trainerName, TRAINER_EVENT_TYPE.entering, gymDetail))
        currentState.presence = true
      }
    }
    else {
      if (currentState.presence) {
        trainerEvents.push(new TrainerEvent(trainerName, TRAINER_EVENT_TYPE.exiting, gymDetail))
        currentState.presence = false
      }
    }
  });

  return trainerEvents;
}

class TrainerEvent {
  constructor(trainerName, type, gymDetails) {
    this.trainerName = trainerName
    this.type = type
    this.gymDetails = gymDetails
  }
}

module.exports = getTrainerHistory
