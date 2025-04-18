const mongoose  = require("mongoose");
const studentSchema = mongoose.Schema({
    name:{type:String,require:true},
    address:{type:String,require:true},
    phn:{type:Number,require:true},
    course:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
});
module.exports=mongoose.model('student',studentSchema);