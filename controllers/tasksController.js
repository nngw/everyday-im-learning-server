const Tasks = require('../models/tasksModels')
const mongoose = require('mongoose')

//Get all tasks (for the user)
const getTasks = async (req, res) => {
  const user_id = req.user._id
  
  const tasks = await Tasks.find({ user_id })
  res.status(200).json(tasks)
}

//Get one task
const getTaskbyId = async (req,res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error:"No such tasks to diplay"})
  }
  
  const task = await Tasks.findById(id)

  if (!task) {
    return res.status(404).json({error: "No such task"})
  }

  res.status(200).json(task)
}

//Create new
const createTask = async (req,res) => {
  const {task, time} = req.body

  let emptyFields = []

  if(!task){
    emptyFields.push('task')
  }
  if(!time){
    emptyFields.push('time')
  }

  if(emptyFields.length > 0) {
    return res.status(400).json({error: "Please fill in all fields", emptyFields})
  }


  try {
    const user_id = req.user._id
    const newTask = await Tasks.create({task, time, user_id})
    res.status(200).json(newTask)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//Delete
const deleteTask = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such task'})
  }

  const task = await Tasks.findOneAndDelete({_id: id})

  if (!task) {
    return res.status(400).json({error: 'No such task'})
  }

  res.status(200).json(task)
}

//Mark Complete
const markAsComplete = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such task'})
  }

  const task = await Tasks.findOneAndUpdate({_id: id}, {
    completed: true
  })

  if (!task) {
    return res.status(400).json({error: 'No such task'})
  }

  res.status(200).json(task)
}


//Update
const updateTask = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such task'})
  }

  const task = await Tasks.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!task) {
    return res.status(400).json({error: 'No such task'})
  }

  res.status(200).json(task)
}


module.exports = {
  getTasks,
  getTaskbyId,
  createTask,
  deleteTask,
  updateTask,
  markAsComplete
}
