const { Router } = require('express');

const taskController = require('../controllers/index.js');

const router = Router();

router.get('/:user_id', taskController.getUser);
router.get('/:user_id/tasks', taskController.getTasks);
router.get('/:user_id/tasks/:task_id', taskController.getTask);
//router.post('/:id', taskController.createUser);
//router.post('/login', taskController.loginUser)
//router.post('/signup', taskController.signupUser)
router.post('/:user_id/tasks/:task_id', taskController.createTask);
router.patch('/:user_id', taskController.updateUser);
router.patch('/:user_id/tasks/:task_id', taskController.updateTask);
router.delete('/:user_id', taskController.deleteUser);
router.delete('/:user_id/tasks/:task_id', taskController.deleteTask);


module.exports = router;
