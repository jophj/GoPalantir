const Gym = require('./schemas/gym.js').model

const gymMiddleware = function (req, res, next) {
  const message = req.body;
  if (message.type == 'gym') {
    let gymUpdate = new Gym(message.message)
    gymUpdate.save((err) => console.log(err || 'Gym update saved ' + gymUpdate.gym_id))
    res.sendStatus(200)
  }
  else {
    next()
  }
}

module.exports = gymMiddleware
