const mongoose = require("mongoose");
const feedbackSchema = mongoose.Schema({
    feedback:{type:String,require:true},
    studentid:{type:mongoose.Schema.Types.ObjectId,ref:"student"},
    seekerid:{type:mongoose.Schema.Types.ObjectId,ref:"seeker"}
})
module.exports = mongoose.model("feedback",feedbackSchema);