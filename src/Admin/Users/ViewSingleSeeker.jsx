import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Defaults/Header/header";
import SideMenuAdmin from "../SideMenu/sidemenuAdmin";


const ViewSingleSeeker = () => {
  const { id } = useParams();
  const [seeker, setSeeker] = useState({
    name: "",
    address: "",
    phn: null,
    course: "",
    email: ""
  });

  useEffect(() => {
    axios.post(`http://localhost:8000/viewsingleseeker/${id}`)
      .then((result) => {
        setSeeker(result.data.data);
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
      <h2>Seeker Details</h2>
      <p><strong>Name:</strong> {seeker.name}</p>
      <p><strong>Address:</strong> {seeker.address}</p>
      <p><strong>Phone:</strong> {seeker.phn}</p>
      <p><strong>Qualification:</strong> {seeker.qualification}</p>
      <p><strong>Email:</strong> {seeker.email}</p>
    </div>
</div>
        </div>
        
    </div>    
  );
};

export default ViewSingleSeeker;
