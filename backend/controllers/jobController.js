const Job = require('../models/jobSchema');
const AddJob = (req,res)=>{
    let newJob = new Job({
        title:req.body.title,
        description:req.body.description,
        salary:req.body.salary,
        location:req.body.location,
        company:req.body.company,
        noticeperiod:req.body.noticeperiod
    })
    newJob.save()
    .then((result)=>{
        return res.json({
            message:"New Job Added",
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};
const UpdateJob = (req,res) =>{
    let updateData = {
        title:req.body.title,
        description:req.body.description,
        salary:req.body.salary,
        location:req.body.location,
        company:req.body.company,
        noticeperiod:req.body.noticeperiod
    }
    Job.findByIdAndUpdate(req.params.id,updateData,{new:true})
    .then((result)=>{
        return res.json({
            message:"Job data updated",
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
    })
};
const DeleteJob = (req,res)=>{
    Job.findByIdAndUpdate(req.params.id,{status:false},{new:true})
    .then((result)=>{
        return res.json({
            message:"Job Deleted"
        })
    })
};
const ViewJob =  (req,res)=>{
    Job.find()
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};
const ViewSingleJob =  (req,res)=>{
    Job.findById(req.params.id)
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};
module.exports={AddJob,UpdateJob,DeleteJob,ViewJob,ViewSingleJob}