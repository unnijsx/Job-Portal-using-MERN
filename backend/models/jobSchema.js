const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
    title:{type:String,require:true},
    description:{type:String,require:true},
    salary:{type:Number},
    location:{type:String,required:true},
    company:{type:String,required:true},
    noticeperiod:{type:Number,required:true}, //in days
    status:{type:Boolean,default:true}
})
module.exports= mongoose.model("job",jobSchema); 