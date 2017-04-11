const Gym = require('./schemas/gym.js').model

const gymMiddleware = function (req, res, next) {
  const message = req.body;
  if (message.type == 'gym') {
    let gymUpdate = new Gym(message.message)
    gymUpdate.save((err) => console.log(err || 'Gym update saved'));
  }

  next()
}

module.exports = gymMiddleware
