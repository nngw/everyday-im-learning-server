const { Router } = require('express');
const router = Router();

// const taskController = require('../controllers/tasksController');

const {
  getTasks,
  getTaskbyId,
  createTask,
  deleteTask,
  markAsComplete,
  updateTask
} = require('../controllers/tasksController')

// router.get('/', taskController.getUsers);
// router.get('/:id/tasks', taskController.getTasks);
// router.get('/:id/tasks/:taskId', taskController.getTaskById);
// router.post('/:id', taskController.createTask);
// router.post('/login', taskController.loginUser)
// router.post('/signup', taskController.signupUser)
// router.post('/:id/tasks/:taskId', taskController.updateTask);
// router.patch('/:id', taskController.updateUser);
// router.patch('/:id/tasks/:taskId', taskController.updateTask);
// router.delete('/:id', taskController.destroyUser);
// router.delete('/:id/tasks/:taskId', taskController.destroyTask);



// const requireAuth = require('../middleware/requireAuth')
// router.use(requireAuth)

//Get workout by user
router.get('/', getTasks)

//Get workout by id
router.get('/:id', getTaskbyId)

//Create new workout
router.post('/', createTask)

//Delete a workout
router.delete('/:id', deleteTask)

//Mark as complete
router.patch('/:id/complete', markAsComplete)

//Modify task
router.patch('/:id', updateTask)

module.exports = router;
