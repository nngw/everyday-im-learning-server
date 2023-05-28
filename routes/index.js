const { Router } = require('express');
const controller = require('../controllers/index');

const router = Router();

//Routes 
router.get('/', controller.index)


module.exports = router
