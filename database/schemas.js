 import mongoose from 'mongoose';
 const { Schema, model } = mongoose;

 const users = new Schema({
     _id: Number,
     username: String
 })

 const tasks = new Schema({
     _id: Number,
     task: String,
     time: Number
 })


 const Users = model('Users', users);

 const Tasks = model('Tasks', tasks);


 module.exports = {
     Users, 
     Tasks
 }

