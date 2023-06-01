const { Router } = require('express');
const router = Router();

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

const {
  getTasks,
  getTaskbyId,
  createTask,
  deleteTask,
  markAsComplete,
  updateTask
} = require('../controllers/tasksController')


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
