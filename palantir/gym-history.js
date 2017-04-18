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

function getGymHistory(gymId) {
  let promise = new Promise((resolve, reject) => {
    queryGymHistory(gymId).then((gyms) => {
      let gymEvents = [];
      let currentState = {
        points: 0,
        teamId: 0
      }

      gyms.forEach( g => {
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

        currentState.points = g.gym_points
        currentState.teamId = g.team_id
      })
      gymEvents.reverse()

      let detailsPromises = gymEvents.map(g => {
        let promise = new Promise((resolve, reject) => {
          // can be optimized using date ranges
          GymDetails.find({
            id: g.gymId,
            date: { $gt: g.gym.date }
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
