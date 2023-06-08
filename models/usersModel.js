const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const usersSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

//Static signup method
usersSchema.statics.signup = async function (email, password)  {
  //validation
  if (!email || !password) {
    throw Error('All fields must be present')
  }

  if (!validator.isEmail(email)){
    throw Error ('Email not valid')
  }

  if (!validator.isStrongPassword(password)){
    throw Error('Password not strong enough')
  }

  //Check if uses exists
  const exists = await this.findOne ({ email })

  if(exists) {
    throw Error('Email already exists')
  }

  //Hash password and save user
  const salt = await bcrypt.genSalt(10)

  const hash = await bcrypt.hash(password, salt)
  
  const user = await this.create({ email, password: hash })

  return user
}

//Static login method
usersSchema.statics.login = async function (email, password) {
//validation
  if (!email || !password) {
    throw Error('All fields must be present')
  }

  const user = await this.findOne ({ email })

  if(!user) {
    throw Error('Incorrect email and/or password')
  }

  const match = await bcrypt.compare(password, user. password)

  if(!match) {
    throw Error("Incorrect email and/or password")
  }

  return user
}



module.exports = mongoose.model('User', usersSchema)
