const { Router } = require('express')
const router = Router()

const { signupUser, loginUser, getUser } = require('../controllers/usersControllers')

//Login
router.post('/login', loginUser)

//Signup
router.post('/signup', signupUser)

//user data
// router.get('/:user_id', getUser);

module.exports = router
