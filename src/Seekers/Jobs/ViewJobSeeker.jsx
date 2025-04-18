import { React, useEffect, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import Header from "../../Defaults/Header/header";
import SideMenuSeeker from "../SideMenu/sidemenuSeeker";

const ViewJobSeeker = () => {
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
    axios.post(`http://localhost:8000/viewsinglejob/${id}`)
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
            <div><SideMenuSeeker/></div>
            <div className="view-box" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{justifyContent:"center" }}>
          <h2>Job Details</h2>
          <p><strong>Title:</strong> {i.title}</p>
          <p><strong>Description:</strong> {i.description}</p>
          <p><strong>Salary:</strong> {i.salary}</p>
          <p><strong>Location:</strong> {i.location}</p>
          <p><strong>Company:</strong> {i.company}</p>
          <p><strong>Notice Period:</strong> {i.noticeperiod}</p>
        </div>
    </div>
            </div>
            
        </div>    
  );
};

export default ViewJobSeeker;
