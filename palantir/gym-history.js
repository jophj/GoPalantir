'use strict';
/**
 * Gym history module. Usage:
 * 
 * getGymHistory(gymId).then(gymEvents => {
 *   console.log(gymEvents.map( g => ({
 *     type: g.type,
 *     date: g.gym.date,
 *     team: g.gym.team_id,
 *     points: g.gym.gym_points
 *   })))
 * })
 */

function gymStatusMapper(g) {
  let gymStatus = new GymStatus
  gymStatus.id = g.gym.gym_id
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

const Promise = require('bluebird')
const Gym = require('../schemas/gym').model
const GymDetails = require('../schemas/gym-details').model
const GymStatus = require('../models/gym-status')

const GYM_EVENT_TYPE = {
  INCREASING: 'increasing',
  DECREASING: 'decreasing',
  STABLE: 'stable',
  CONQUERED: 'conquered'
}

function computeLevel(points) {
  if (points < 2000) return 1
  if (points < 4000) return 2
  if (points < 8000) return 3
  if (points < 12000) return 4
  if (points < 16000) return 5
  if (points < 20000) return 6
  if (points < 30000) return 7
  if (points < 40000) return 8
  if (points < 50000) return 9
  if (points >= 50000) return 10
  return -1
}

function queryGymHistory(gymId) {
  let promise = new Promise( (resolve, reject) => {
    Gym.find({
      gym_id: gymId
    })
    .sort({ date: 1 })
    .exec((err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

  return promise
}

function getNewEvent(currentState, gymStatus, nextGymStatus) {
  if (!nextGymStatus) nextGymStatus = gymStatus
  let gymLevel = computeLevel(gymStatus.gym_points)
  if (currentState.level === gymLevel) return

  if (gymStatus.team_id === currentState.teamId) {
    if (gymStatus.gym_points > currentState.points) {
      return new GymEvent(nextGymStatus.gym_id, GYM_EVENT_TYPE.INCREASING, gymStatus)
    }
    else if (gymStatus.gym_points < currentState.points) {
      return new GymEvent(nextGymStatus.gym_id, GYM_EVENT_TYPE.DECREASING, gymStatus)
    }
    else {
      // stable event removed to have less data to process
      // return new GymEvent(nextGymStatus.gym_id, GYM_EVENT_TYPE.STABLE, gymStatus)
    }
  }
  else {
    return new GymEvent(nextGymStatus.gym_id, GYM_EVENT_TYPE.CONQUERED, gymStatus)
  }
}

function getGymHistory(gymId) {
  let promise = new Promise((resolve, reject) => {
    queryGymHistory(gymId).then((gyms) => {
      let gymEvents = [];
      let currentState = {
        points: 0,
        teamId: 0,
        level: -1
      }

      if (gyms.length > 0) currentState.level = computeLevel(gyms[0])

      for(var i = 0; i < gyms.length - 1; i++) {
        let gymStatus = gyms[i]
        let nextGymStatus = gyms[i + 1]
        let newEvent = getNewEvent(currentState, gymStatus, nextGymStatus)
        if (newEvent != null) {
          gymEvents.push(newEvent)
        }

        currentState.level = computeLevel(gymStatus.gym_points)
        currentState.points = gymStatus.gym_points
        currentState.teamId = gymStatus.team_id
      }
      let newEvent = getNewEvent(currentState, gyms[gyms.length - 1])
      if (newEvent != null) {
        gymEvents.push(newEvent)
      }

      gymEvents.reverse()

      let detailsPromises = gymEvents.map(g => {
        let promise = new Promise((resolve, reject) => {
          // can not be optimized using date ranges
          // can be optimized reducing the queries
          GymDetails.find({
            id: g.gymId,
            date: { $lt: g.gym.date }
          })
          .sort({date: -1})
          .limit(1)
          .exec((err, data) => {
            if (data && data.length > 0) {
              g.details = data[0]              
            }
            if (err) reject(err)
            else resolve(g)
          })
        })
        return promise
      })

      Promise
        .all(detailsPromises)
        .then(events => {
          resolve(gymEvents.map(gymStatusMapper))
        })
    })
  })
  return promise
}

class GymEvent {
  constructor(gymId, type, gym) {
    this.gymId = gymId
    this.type = type
    this.gym = gym
  }
}

module.exports = getGymHistory
