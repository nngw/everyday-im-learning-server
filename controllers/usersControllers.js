const Users = require('../models/usersModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' }) 
}

//login
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await Users.login(email, password)

    const token = createToken(user._id)

    res.status(200).json({email, token})

  } catch (error) {

    res.status(400).json({error: error.message})

  }
}

//sign up
const signupUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await Users.signup(email, password)

    const token = createToken(user._id)

    res.status(201).json({email, token})

  } catch (error) {

    res.status(400).json({error: error.message})

  }
  
}

// async function getUser(req, res) {
//   try {
//     const id = Users._id.toString()
//     console.log(id)
//     //const users = await User.getUserById(id);
//     //user._id.toString()
//     const user = await Users.findById(id)
//     res.status(200).json(user);
//   } catch (e) {
//     res
//       .status(500)
//       .json({ success: false, message: "Cannot find the user", error: e });
//   }
// }

module.exports = {
  signupUser, loginUser
}
