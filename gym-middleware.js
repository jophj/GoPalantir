const gymMiddleware = function (req, res, next) {
  const message = req.body;
  if (message.type == 'gym') {
    console.log(message)
  }

  next()
}

module.exports = gymMiddleware