const Promise = require('bluebird')
const Gym = require('../schemas/gym').model
const GymDetails = require('../schemas/gym-details').model
const GymStatus = require('../models/gymStatus')

function gymStatusMapper(g) {
  let gymStatus = new GymStatus
  gymStatus.id = g._id
  gymStatus.name = g.details && g.details.name
  gymStatus.points = g.gym.gym_points
  gymStatus.teamId = g.gym.team_id
  gymStatus.date = g.gym.date
  gymStatus.lastModified = g.gym.last_modified
  gymStatus.pokemon = g.details && g.details.pokemon
  gymStatus.latitude = g.gym.latitude
  gymStatus.longitude = g.gym.longitude
  gymStatus.imageUrl = g.details && g.details.url
  gymStatus.activityIntensity = g.activity
  return gymStatus
}

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
    let gymStatusModel = gymsStatus.map(gymStatusMapper)
    return gymStatusModel
  })
}

module.exports = getGymsStatus
