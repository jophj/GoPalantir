const express = require('express')
const router = express.Router()

const gymStatus = require('./gym-status')
const gymHistory = require('./gym-history')

router.use('/', gymStatus)
router.use('/', gymHistory)

module.exports = router
