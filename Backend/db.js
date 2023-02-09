const mongoose = require('mongoose');
const mongoURI= "YOUR_DB_LINK"


const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo");
    })
}

module.exports = connectToMongo;