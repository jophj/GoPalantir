const Promise = require('bluebird')
const Gym = require('../schemas/gym').model
const GymDetails = require('../schemas/gym-details').model

function queryGymsStatus() {
  let promise = new Promise((resolve, reject) => {
    Gym.aggregate([
      { $sort: { date: -1 } },
      { $group: { "_id": "$gym_id", gym: { $first: "$$ROOT" }, activity: { $sum: 1 } } },
      { $sort: { activity: -1 } },
    ]).exec((err, gyms) => {
      if (!err) resolve(gyms)
      else reject(err)
    })
  })
  return promise
}

function queryGymsDetails() {
  let promise = new Promise((resolve, reject) => {
    GymDetails.aggregate([
      { $sort: { date: -1 } },
      { $group: { _id: "$id", details: { $first: "$$ROOT" } } },
    ]).exec((err, details) => {
      if (!err) resolve(details)
      else reject(err)
    })
  })
  return promise
}

function getGymsStatus() {
  let gymsStatus = null;

  return queryGymsStatus()
  .then(gymsStatusResult => {
    gymsStatus = gymsStatusResult
    return queryGymsDetails()
  })
  .then((gymDetailsResult) => {
    let gymDetailsKeyValue = {}
    gymDetailsResult.forEach(function(gymDetails) {
      gymDetailsKeyValue[gymDetails.details.id] = gymDetails.details
    });

    gymsStatus.forEach(g => g.details = gymDetailsKeyValue[g.gym.gym_id])
    return gymsStatus
  })
}

module.exports = getGymsStatus
