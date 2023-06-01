const { Router } = require('express')
const router = Router()

const { signupUser, loginUser} = require('../controllers/usersControllers')

//Login
router.post('/login', loginUser)

//Signup
router.post('/signup', signupUser)

module.exports = router
