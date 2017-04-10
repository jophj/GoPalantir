
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dbHost = '192.168.1.100'
const dbName = 'goPalantirDev'
mongoose.connect(`mongodb://${dbHost}/${dbName}`);
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`Connected to database at mongodb://${dbHost}/${dbName}`)
});

const app = express()

const hostname = '0.0.0.0'
const port = 3009

app.use(bodyParser.json())

app.post('/', function (req, res) {
  const message = req.body;
  if (message.type == 'gym_details') {
    console.log(message)
  }
  res.end()
})

app.listen(port, hostname, () => {
  console.log(`GoPalantir webhook running at http://${hostname}:${port}/`)
})