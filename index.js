
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const hostname = '0.0.0.0';
const port = 3009;

app.use(bodyParser.json());

app.post('/', function (req, res) {
  const message = req.body;
  if (message.type == 'gym_details')
    console.log(message)
    
  res.end()
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});