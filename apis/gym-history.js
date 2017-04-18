const express = require('express')
const router = express.Router()

const getGymHistory = require('../palantir/gym-history')

router.use('/gym-history/:id', (req, res) => getGymHistory(req.params.id).then(gymHistory => res.send(gymHistory)))

module.exports = router
