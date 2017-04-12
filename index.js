const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = require('bluebird');

const gymDetailsMiddleware = require('./gym-details-middleware')
const gymMiddleware = require('./gym-middleware')

let userConfig = {}
try {
  userConfig = require('./config')
}
catch (e) { console.log(e)}
const config = {
  hostname: userConfig.hostname || 'localhost',
  port: userConfig.port || 3009,
  dbHost: userConfig.dbHost || 'localhost',
  dbPort: userConfig.dbPort || 27017,
  dbName: userConfig.dbName || 'goPalantir',
  dbUser: userConfig.dbUser || 'goPalantir',
  dbPass: userConfig.dbPass || 'LongSafePassword!1!11!',
}

mongoose.connect(`mongodb://${config.dbUser}:${config.dbPass}@${config.dbHost}:${config.dbPort}/${config.dbName}`);
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`Connected to database mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`)

  require('./palantir/player-history') // TODO remove me
});

const app = express()
app.use(bodyParser.json())
app.use(gymDetailsMiddleware);
app.use(gymMiddleware);

app.post('/', function (req, res) { 
  res.end()
})

app.listen(config.port, config.hostname, () => {
  console.log(`GoPalantir webhook running at http://${config.hostname}:${config.port}/`)
})
