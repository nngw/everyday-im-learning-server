const express = require('express');
const cors = require('cors');

const app = express();

// const tasksRoutes = require('./routes/tasksRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes)
// app.use('/tasks', tasksRoutes)


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

module.exports = app;
