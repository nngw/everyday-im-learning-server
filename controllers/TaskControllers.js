const User = require("../models/usersModel.js");
const Task = require("../models/tasksModels.js")

async function index(req, res) {
  try {
    const users = await User.getAll();
    res.status(200).json(users);
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Cannot find that user", error: e });
  }
}

// async function getUser(req, res) {
//   try {
//     const id = parseInt(req.params.user_id)
//     console.log(id)
//     const users = await User.getUserById(id);
//     // const users = await User.find({user_id: [id]})
//     res.status(200).json(users);
//   } catch (e) {
//     res
//       .status(500)
//       .json({ success: false, message: "Cannot find the user", error: e });
//   }
// }

async function getUser(req, res) {
  try {
    console.log("I work i guess")
    const id = req._user_id
    console.log(id)
    //const user = await User.getUserById(id);
    //user._id.toString()
    const user = await User.findById(id)
    res.status(200).json(user);
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Cannot find the user", error: e });
  }
}

async function getTasks(req, res) {
  try {
      const id = parseInt(req.params.user_id);
      const tasks = await User.geTaskById(id);
      res.status(200).json(tasks)
  } catch(e) {
    res.status(500).json({ "success": false, "message": "Cannot find that user", "error": e })
  }
}

async function getTask(req, res) {
  try {
    const id = parseInt(req.params.user_id);
    const users = await User.getTaskById(ObjectId.isvalid(id));
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
async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await User.updateUser(userId, updatedData);
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
  index, getUser, getTasks, getTask, createTask, deleteUser, deleteTask, updateUser, updateTask 
}
