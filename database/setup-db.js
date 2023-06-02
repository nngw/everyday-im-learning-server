 require("dotenv").config()
 const { MongoClient } = require("mongodb")

  const url = process.env.DB_CONNECTION

  const client = new MongoClient(url)

  const connectDB = async () => {
      try {
          await client.connect()
          console.log("Connected to DB Succesfully")
      } catch (error) {
          console.log(error)
      }
  }

  connectDB()

  module.exports = client

/*
 const client = require('./setup-db')

 const seedDB = async () => {
     try {
         await client.connect()
         console.log("Awaiting...")
         await client.db('protect-the-pandas').collection('users').drop()
         await client.db('protect-the-pandas').collection('users').insertMany([
             {username: 'Nicole', password: 'password', tasks: 'Very important task', timer: 25.00},
             {username: 'Sean', password: 'password', tasks: 'Very important task', timer: 25.00},
             {username: 'Angela', password: 'password', tasks: 'Very important task', timer: 25.00},
             {username: 'Thanushiyan', password: 'password', tasks: 'Very important task', timer: 25.00},
             {username: 'Becki', password: 'password', tasks: 'Very important task', timer: 25.00},
         ])
         console.log("DB Seeded Successfully")
         await client.close()
     } catch (error) {
         console.log(error)
     }
 }

 seedDB()









 */
