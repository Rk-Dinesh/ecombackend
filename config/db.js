const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://erchamubalaji:1903@react.sk3mcum.mongodb.net/ecom').on('open',() => {
    console.log("MongoDB Connected");
}).on('error',() =>{
    console.log("MongoDB Connection error");
});

module.exports = connection;