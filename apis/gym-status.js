const express = require('express')
const router = express.Router()

const getGymsStatus = require('../palantir/gyms-status')

router.use('/gym-status', (req, res) => getGymsStatus().then(gymsStatus => res.send(gymsStatus)))

module.exports = router
