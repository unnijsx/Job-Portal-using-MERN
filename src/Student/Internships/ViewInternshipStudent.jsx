import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Defaults/Header/header";
import SideMenuAdmin from "../SideMenu/sidemenuStudent";

const ViewInternshipStudent = () => {
  const {id} = useParams();
  const [i, setInternship] = useState({
    title: "",
    description: "",
    stipend: "",
    location: "",
    company: "",
    duration: ""
  });
  useEffect(() => {
    axios.post(`http://localhost:8000/viewsingleinternship/${id}`)
        .then((result) => {
            setInternship(result.data.data);
        })
        .catch((error) => {
            console.error("Error fetching  data:", error);
        });
}, []);


  return (
    <div>
        <div className="main-container">
            <Header/>
            <div><SideMenuAdmin/></div>
            <div className="view-box" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{justifyContent:"center" }}>
          <h2>Internship Details</h2>
          <p><strong>Title:</strong> {i.title}</p>
          <p><strong>Description:</strong> {i.description}</p>
          <p><strong>Stipend:</strong> {i.stipend}</p>
          <p><strong>Location:</strong> {i.location}</p>
          <p><strong>Company:</strong> {i.company}</p>
          <p><strong>Duration:</strong> {i.duration}</p>
        </div>
    </div>
            </div>
            
        </div>    
  );
};

export default ViewInternshipStudent;
