const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const Student = require('./controllers/studentController');
const Admin = require("./controllers/adminController");
const Seeker = require("./controllers/seekerContoller");
const Internship = require('./controllers/intershipController');
const Feedback = require('./controllers/feedbackController');
const Job =  require('./controllers/jobController');


//Admin
router.post('/addinternship',Internship.AddInternship);
router.post('/updateinternship/:id',Internship.UpdateInternship);
router.post('/deleteinternship/:id',Internship.DeleteInternship);
router.post('/addjob',Job.AddJob);
router.post('/updatejob/:id',Job.UpdateJob);
router.post('/deletejob/:id',Job.DeleteJob);
router.post('/viewfeedbacks',Feedback.ViewFeedbacks);

//Common
router.post('/login',Admin.Login);
router.post('/forgotpass',Admin.ForgotPass);

router.post('/viewjob',Job.ViewJob);
router.post('/viewsinglejob/:id',Job.ViewSingleJob)
router.post('/viewinternship',Internship.ViewInternship);
router.post('/viewsingleinternship/:id',Internship.ViewSingleInternship);
router.post('/viewstudents',Student.ViewStudents);
router.post('/viewseekers',Seeker.ViewSeekers);
router.post('/viewstudent/:id',Student.ViewSingleStudent);
router.post('/viewsingleseeker/:id',Seeker.ViewSingleSeeker);

//Student
router.post('/studentregister',upload.none(),Student.StudentRegister);
router.post('/studentupdate/:id',Student.UpdateProfile)
router.post('/studentchangepass/:id',Student.ChangePass);

//Seeker
router.post("/seekerregister", upload.none(), Seeker.SeekerRegister);
router.post('/updateprofile/:id',Seeker.UpdateProfile);
router.post('/changepass/:id',Seeker.ChangePass);

module.exports = router;