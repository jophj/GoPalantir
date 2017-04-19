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

const Promise = require('bluebird')
const Gym = require('../schemas/gym').model
const GymDetails = require('../schemas/gym-details').model

const GYM_EVENT_TYPE = {
  INCREASING: 'increasing',
  DECREASING: 'decreasing',
  STABLE: 'stable',
  CONQUERED: 'conquered'
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

function getGymHistory(gymId) {
  let promise = new Promise((resolve, reject) => {
    queryGymHistory(gymId).then((gyms) => {
      let gymEvents = [];
      let currentState = {
        points: 0,
        teamId: 0,
        level: -1
      }

      gyms.forEach( g => {
        let gymLevel = computeLevel(g.gym_points)
        if (currentState.level === gymLevel) return;

        if (g.team_id === currentState.teamId) {
          if (g.gym_points > currentState.points) {
            gymEvents.push(new GymEvent(g.gym_id, GYM_EVENT_TYPE.INCREASING, g))
          }
          else if (g.gym_points < currentState.points) {
            gymEvents.push(new GymEvent(g.gym_id, GYM_EVENT_TYPE.DECREASING, g))
          }
          else {
            // stable event removed to have less data to process
            // gymEvents.push(new GymEvent(g.gym_id, GYM_EVENT_TYPE.STABLE, g))
          }
        }
        else {
          gymEvents.push(new GymEvent(g.gym_id, GYM_EVENT_TYPE.CONQUERED, g))
        }

        currentState.level = gymLevel
        currentState.points = g.gym_points
        currentState.teamId = g.team_id
      })
      gymEvents.reverse()

      let detailsPromises = gymEvents.map(g => {
        let promise = new Promise((resolve, reject) => {
          // can not be optimized using date ranges
          // can be optimized reducing the queries
          GymDetails.find({
            id: g.gymId,
            date: { $gt: g.gym.date }
          })
          .sort({date: 1})
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
          resolve(gymEvents)
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
