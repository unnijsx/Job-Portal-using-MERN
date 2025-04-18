import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Defaults/Header/header";
import SideMenuAdmin from "../SideMenu/sidemenuAdmin";


const ViewSingleStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    address: "",
    phn: null,
    course: "",
    email: ""
  });

  useEffect(() => {
    axios.post(`http://localhost:8000/viewstudent/${id}`)
      .then((result) => {
        setStudent(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
    <div className="main-container">
        <Header/>
        <div><SideMenuAdmin/></div>
        <div className="view-box" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <div style={{justifyContent:"center" }}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Phone:</strong> {student.phn}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Email:</strong> {student.email}</p>
    </div>
</div>
        </div>
        
    </div>    
  );
};

export default ViewSingleStudent;
