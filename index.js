const stories = require("./routes/stories");
const connectDB = require('./db/connect')
const cors = require("cors");
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// middleware
app.use(express.json())

mongoose.connect("mongodb+srv://mahmoud:bbsop2004@cluster0.3c6gb.mongodb.net/sprint-manager?retryWrites=true&w=majority")

// connection();

app.use(express.json())
app.use(cors())

app.use("/api/v1/stories", stories)

const port = process.env.PORT || 3001;

const start = async () => {
    try {
        await connectDB()
        console.log('CONNECTED TO DB...')
        app.listen(port, () => console.log(`Server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();