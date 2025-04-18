const Student = require('../models/Student');
  const StudentRegister = (req, res) => {
    const { name, email, address, phn, qualification, password, age } = req.body;
    const course = qualification;
  
    if (!name || !email || !address || !phn || !qualification || !password || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    const newStudent = new Student({ name, email, address, phn, course, password, age });
  
    newStudent
      .save()
      .then((result) => {
        res.json({ message: "Registration successful", data: result });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Database error", error });
      });
  };
const UpdateProfile = (req,res)=>{
    let updateData={
        name:req.body.name,
        address:req.body.address,
        phn:req.body.phn,
        course:req.body.course,
        email:req.body.email
    }    
    Student.findByIdAndUpdate(req.params.id,updateData,{new:true})
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
const ViewProfile = (req,res)=>{ 
    Student.findById(req.params.id)
    .then((result)=>{
        res.json({
            data:result
        })
    })
    .catch((err)=>{
        console.log(err);
    })
};
const ChangePass = (req, res) => {
    const { oldPass, newPass } = req.body;
  
    Student.findById(req.params.id)
      .then((student) => {
        if (!student) {
          return res.status(404).json({ message: "Student not found" });
        }
  
        if (student.password === oldPass) {
          Student.findByIdAndUpdate(req.params.id, { password: newPass })
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
        console.error("Error finding student:", error);
        return res.status(500).json({ message: "Something went wrong" });
      });
  };
  
const ViewStudents = (req,res)=>{
    Student.find()
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};
const ViewSingleStudent = (req,res)=>{
    Student.findById(req.params.id)
    .then((result)=>{
        return res.json({
            data:result
        })
    })
    .catch((error)=>{
        console.log(error);
        })
};
module.exports = {StudentRegister,UpdateProfile,ViewProfile,
    ViewSingleStudent,ViewStudents,ChangePass
};