const express = require('express');
const cors = require('cors');

const router = require('./routes/index.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", router);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  
module.exports = app;
