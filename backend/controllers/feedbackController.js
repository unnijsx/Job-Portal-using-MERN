const Feedback = require('../models/feedbackSchema');

const SendFeedback = (req,res)=>{
    const{utype} =req.body.utype;
    if(utype=="seeker"){
        let newFeedback = new Feedback({
            feedback:req.body.feedback,
            seekerid:req.params.id
        })
        newFeedback.save()
        .then((result)=>{
            return res.json({
                message:"New feedback added",
                data:result
            })
        })
        .catch((error)=>{
            console.log(error);
            })
    }

    else if(utype=="student"){
        let newFeedback = new Feedback({
            feedback:req.body.feedback,
            studentid:req.params.id
        })
        newFeedback.save()
        .then((result)=>{
            return res.json({
                message:"New feedback added",
                data:result
            })
        })
        .catch((error)=>{
            console.log(error);
            })
    }
    else{
        return res.json({
            message:"User type error please relogin"
        })
    }
};
const ViewSingleUserFeedback = (req,res)=>{
    const {utype}=req.body.utype;
    if(utype=="studentid"){
        Feedback.find({studentid:req.params.id})
        .then((result)=>{
            return res.json({
                data:result
            })
        })
        .catch((error)=>{
            console.log(error);
            })
    }
    else if(utype=="seekerid"){
    Feedback.find({seekerid:req.params.id})
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
    }
};
const ViewFeedbacks = (req,res)=>{
    Feedback.find()
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};

module.exports = {SendFeedback,ViewFeedbacks,ViewSingleUserFeedback}