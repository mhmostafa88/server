const stories = require("./routes/stories");
const connectDB = require('./db/connect')
require('dotenv').config();
const cors = require("cors");
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// middleware
app.use(express.json())

app.use(express.json())
app.use(cors())

app.use("/api/v1/stories", stories)

const port = process.env.PORT || 3001;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('CONNECTED TO DB...')
        app.listen(port, () => console.log(`Server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();