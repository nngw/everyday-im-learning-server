require("dotenv").config();
const mongoose = require('mongoose')
const app = require("./app");

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on Port ${port}`)
      console.log("Connected to DB")
    })
  })
  .catch((err) => {
    console.log(err)
  })
