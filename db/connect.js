const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://mahmoud:bbsop2004@cluster0.3c6gb.mongodb.net/sprint-manager?retryWrites=true&w=majority';

const connectDB = (url) => {
return mongoose.connect(connectionString)
}


module.exports = connectDB;

 
