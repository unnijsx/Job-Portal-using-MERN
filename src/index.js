import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './Defaults/Registration/register';
import UserLogin from './Defaults/Login/UserLogin';
import AdminHome from './Admin/Home/adminHome';
import AddInternship from './Admin/Internships/AddInternship';
import ViewInternship from './Admin/Internships/ViewInternship';
import AddJob from './Admin/Jobs/AddJob';
import ViewJob from './Admin/Jobs/ViewJob';
import UpdateInternship from './Admin/Internships/UpdateInternship';
import UpdateJob from './Admin/Jobs/UpdateJob';
import ViewStudents from './Admin/Users/ViewStudents';
import ViewSingleStudent from './Admin/Users/ViewSingleStudent';
import ViewSeekers from './Admin/Users/ViewSeekers';
import ViewSingleSeeker from './Admin/Users/ViewSingleSeeker';
import StudentHome from './Student/Home/StudentHome';
import StudentProfile from './Student/Profile/StudentProfile';
import ViewInternships from './Student/Internships/ViewInternship';
import ViewInternshipStudent from './Student/Internships/ViewInternshipStudent';
import StudentChangePass from './Student/Profile/StudentChangePass';
import SeekerHome from './Seekers/Home/SeekerHome';
import SeekerProfile from './Seekers/Profile/SeekerProfile';
import ViewJobs from './Seekers/Jobs/ViewJobs';
import SeekerChangePass from './Seekers/Profile/SeekerChangePass';
import ViewJobSeeker from './Seekers/Jobs/ViewJobSeeker';
import ForgotPass from './Defaults/Login/ForgotPass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<UserLogin/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
     <Route path='/addinternship' element={<AddInternship/>}/>
     <Route path='/viewinternships' element={<ViewInternship/>}/>
     <Route path='/addjob' element={<AddJob/>}/>
     <Route path='/viewjobs' element={<ViewJob/>}/>
     <Route path='/updateinternship/:id' element={<UpdateInternship/>}/>
     <Route path='/updatejob/:id' element={<UpdateJob/>}/>
     <Route path='/viewstudents' element={<ViewStudents/>}/>
     <Route path='/viewsinglestudent/:id' element={<ViewSingleStudent/>}/>
     <Route path='/viewseekers' element={<ViewSeekers/>}/>
     <Route path='/viewsingleseeker/:id' element={<ViewSingleSeeker/>}/>
     <Route path='/studenthome' element={<StudentHome/>}/>
     <Route path='/studentprofile' element={<StudentProfile/>}/>
     <Route path='/viewinternshipsstudent' element={<ViewInternships/>}/>
     <Route path='/viewsingleintrn/:id' element={<ViewInternshipStudent/>}/>
     <Route path='/studentchangepass' element={<StudentChangePass/>}/>
     <Route path='/seekerhome' element={<SeekerHome/>}/>
     <Route path='/seekerprofile' element={<SeekerProfile/>}/>
     <Route path='/viewjobseeker' element={<ViewJobs/>}/>
     <Route path='/viewsinglejob/:id' element={<ViewJobSeeker/>}/>
     <Route path='/seekerchangepass' element={<SeekerChangePass/>}/>
     <Route path='/forgotpassword' element={<ForgotPass/>}/>
    </Routes>
  </Router>
);
reportWebVitals();
