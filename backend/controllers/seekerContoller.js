const Seeker = require('../models/Seeker');
const ViewProfile = (req,res) =>{
    Seeker.findById(req.params.id)
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};
const UpdateProfile= (req,res) =>{
    let updateData = {
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        phn:req.body.phn,
        qualification:req.body.qualification
    }
    Seeker.findByIdAndUpdate(req.params.id,updateData,{new:true})
        .then((result)=>{
            res.json({
                message:"Data updated",
                data:result
            })
        })
        .catch((err)=>{
            console.log(err);
        })
};
const ChangePass = (req, res) => {
    const { oldPass, newPass } = req.body;
  
    Seeker.findById(req.params.id)
      .then((seeker) => {
        if (!seeker) {
          return res.status(404).json({ message: "seeker not found" });
        }
  
        if (seeker.password === oldPass) {
          Seeker.findByIdAndUpdate(req.params.id, { password: newPass })
            .then(() => {
              return res.json({ message: "Password Changed" });
            })
            .catch((updateError) => {
              console.error("Error updating password:", updateError);
              return res.status(500).json({ message: "Error updating password" });
            });
        } else {
          return res.json({ message: "Entered old password is incorrect" });
        }
      })
      .catch((error) => {
        console.error("Error finding seeker:", error);
        return res.status(500).json({ message: "Something went wrong" });
      });
  };
  const SeekerRegister = (req, res) => {
    const { name, email, address, phn, qualification, password, age } = req.body;
  
    if (!name || !email || !address || !phn || !qualification || !password || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    const newSeeker = new Seeker({ name, email, address, phn, qualification, password, age });
  
    newSeeker
      .save()
      .then((result) => {
        res.json({ message: "Registration successful", data: result });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Database error", error });
      });
  };
  
const ViewSeekers = (req,res)=>{
    Seeker.find()
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};
const ViewSingleSeeker = (req,res)=>{
    Seeker.findById(req.params.id)
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};

module.exports = {SeekerRegister,ViewProfile,UpdateProfile,ChangePass,ViewSeekers,ViewSingleSeeker}