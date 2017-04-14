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
            gymEvents.push(new GymEvent(g.gym_id, GYM_EVENT_TYPE.STABLE, g))        
          }
        }
        else {
          gymEvents.push(new GymEvent(g.gym_id, GYM_EVENT_TYPE.CONQUERED, g))        
        }

        currentState.points = g.gym_points
        currentState.teamId = g.team_id
      })

      resolve(gymEvents)
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
