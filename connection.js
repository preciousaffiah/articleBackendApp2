// author: Precious Affiah 2022

const mongoose = require('mongoose');
require('dotenv').config();
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const MONGODB_URI = process.env.MONGODB_URI;

const connectionParams = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}

// const uri = `mongodb+srv://${user}:${password}@cluster0.di9pr.mongodb.net/?retryWrites=true&w=majority`
const connection = mongoose.connect(MONGODB_URI, connectionParams).then(()=>console.log('connected to cloud atlas'))
.catch((err)=>console.log(err));

module.exports = connection  