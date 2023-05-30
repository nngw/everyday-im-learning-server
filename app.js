const express = require('express');
const cors = require('cors');

const router = require('./routes/index.js');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        title: "Welcome",
        description: "Come back later for the see our progress"
    })
})

app.use("/users", router);

module.exports = app;
