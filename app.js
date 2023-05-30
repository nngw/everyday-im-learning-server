const express = require('express');
const cors = require('cors');

const routes = require('./routes/index')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', routes)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  
module.exports = app;
