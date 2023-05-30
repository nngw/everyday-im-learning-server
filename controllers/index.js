const Users = require('../models/index');

async function index(req, res) {
  try {
    const users = await Users.getAll();
    res.status(200).json(users);
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Cannot find that user", error: e });
  }
}

async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await Users.updateUser(userId, updatedData);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ success: false, message: "Cannot find user" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Cannot update user", error: err });
  }
}

async function updateTask(req, res) {
  try {
    const userId = req.params.id;
    const taskId = req.params.taskId;
    const updatedData = req.body;
    const updatedTask = await Users.updateTaskById(userId,
      taskId, updatedData);
      if (updatedTask) {
        res.status(200).json(updatedTask);
      } else {
        res.status(404).json({ success: false, message: "Cannot find task" });
      }
  } catch (err) {
    res.status(500).json({ success: false, message: "Cannot update task", error: err });
  }
}

module.exports = {
  index,
  updateUser,
  updateTask,
};
