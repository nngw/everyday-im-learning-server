const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tasksSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Tasks', tasksSchema)
