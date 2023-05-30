const { Router } = require('express');

const taskController = require('../controllers/index.js');

const router = Router();

// router.get('/', taskController.getUsers);
router.get('/:user_id/tasks', taskController.getTasks);
router.get('/:user_id/tasks/:task_id', taskController.getTask);
//router.post('/:id', taskController.createUser);
//router.post('/login', taskController.loginUser)
//router.post('/signup', taskController.signupUser)
router.post('/:user_id/tasks/:task_id', taskController.createTask);
//router.patch('/:id', taskController.updateUser);
//router.patch('/:id/tasks/:taskId', taskController.updateTask);
router.delete('/:user_id', taskController.deleteUser);
router.delete('/:user_id/tasks/:task_id', taskController.deleteTask);


module.exports = router;
