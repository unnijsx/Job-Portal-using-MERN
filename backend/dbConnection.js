const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/jobportal');
const db=mongoose.connection;
db.on("error",console.error.bind("Database connection have error"));
db.once("open",()=>{
    console.log("Database connected to 'jobportal'");
})
module.exports=db;