const { Router } = require('express');

const taskController = require('../controllers/index.js');

const router = Router();

router.get('/', taskController.getUsers);
router.get('/:id/tasks', taskController.getTasks);
router.get('/:id/tasks/:taskId', taskController.getTaskById);
router.post('/:id', taskController.createTask);
// router.post('/login', taskController.loginUser)
// router.post('/signup', taskController.signupUser)
router.post('/:id/tasks/:taskId', taskController.updateTask);
router.patch('/:id', taskController.updateUser);
router.patch('/:id/tasks/:taskId', taskController.updateTask);
router.delete('/:id', taskController.destroyUser);
router.delete('/:id/tasks/:taskId', taskController.destroyTask);


module.exports = router;
