const mongoose = require('mongoose');
const unemploSchema =  mongoose.Schema({
    name:{type:String,require:true},
    address:{type:String,require:true},
    email:{type:String,require:true},
    phn:{type:Number,require:true},
    qualification:{type:String,require:true},
    password:{type:String,require:true}
});
module.exports = mongoose.model('seeker',unemploSchema);