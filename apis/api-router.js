const express = require('express')
const router = express.Router()

const gymStatus = require('./gym-status')

router.use('/', gymStatus)

module.exports = router
