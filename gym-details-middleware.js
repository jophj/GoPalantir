const gymDetailsMiddleware = function (req, res, next) {
  const message = req.body;
  if (message.type == 'gym_details') {
    //console.log(message)
  }

  next()
}

module.exports = gymDetailsMiddleware