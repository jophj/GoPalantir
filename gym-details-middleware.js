const GymDetails = require('./schemas/gym-details.js').model

const gymDetailsMiddleware = function (req, res, next) {
  const message = req.body;
  if (message.type == 'gym_details') {
    let gymUpdate = new GymDetails(message.message)
    gymUpdate.save((err) => console.log(err || 'Gym details update saved ' + gymUpdate.id))
    res.sendStatus(200)
  }
  else {
    next()
  }
}

module.exports = gymDetailsMiddleware
