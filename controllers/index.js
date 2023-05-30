const User = require('../models/index');

async function index(req, res) {
    try {
        const users = await User.getAll();
        res.status(200).json(users)
    } catch(e) {
      res.status(500).json({ "success": false, "message": "Cannot find that user", "error": e })
    }
}

async function getTasks(req, res) {
  try {
      const id = parseInt(req.params.user_id.task.task_id);
      const tasks = await User.getAllUserTasks(id);
      res.status(200).json(tasks)
  } catch(e) {
    res.status(500).json({ "success": false, "message": "Cannot find that user", "error": e })
  }
}

async function getTask(req, res) {
  try {
    const id = parseInt(req.params.user_id);
    const users = await User.getTaskById(id);
      res.status(200).json(users)
  } catch(e) {
    res.status(500).json({ "success": false, "message": "Cannot find that user", "error": e })
  }
}

async function createTask(req, res) {
  try {
    // const id = parseInt(req.params.task_id);
    // const users = await Users.getUserById(id);
    const data = req.body.tasks;
    const { task_info} = data
    const newTask = await User.createUserTask(task_info);
      res.status(201).json(newTask)
  } catch(e) {
    res.status(404).json({"error": err.message})
  }
}

async function deleteUser (req, res) {
  try {
      const id = parseInt(req.params.user_id);
      const user = await User.getOneById(id);
      const result = await user.destroyUser();
      res.status(204).json(result);
  } catch (err) {
      res.status(404).json({"error": err.message})
  }
}
async function deleteTask (req, res) {
  try {
      const id = parseInt(req.params.user_id);
      const user = await User.getTaskById(id);
      const result = await user.deleteUserTask();
      res.status(204).json(result);
  } catch (err) {
      res.status(404).json({"error": err.message})
  }
}

module.exports = {
  index, getTasks, getTask, createTask, deleteUser, deleteTask
}
