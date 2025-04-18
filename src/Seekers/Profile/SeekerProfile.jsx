import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Header from "../../Defaults/Header/header";
import Button from "@mui/material/Button";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { FormLabel } from "@mui/material";
import SideMenuSeeker from "../SideMenu/sidemenuSeeker";

const SeekerProfile = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("uid");
  const [i, setInternship] = useState({
    name: "",
    address: "",
    phn: null,
    course: "",
    email: ""
    });
  useEffect(() => {
    axios.post(`http://localhost:8000/viewsingleseeker/${id}`)
        .then((result) => {
            setInternship(result.data.data);
        })
        .catch((error) => {
            console.error("Error fetching  data:", error);
        });
}, []);

  const [error, setError] = useState({});

  const handleInput = (e) => {
    setInternship({ ...i, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      const payload = {
        ...i,
        phn: Number(i.phn),
      };

      axios.post(`http://localhost:8000/updateprofile/${id}`, payload)
        .then((result) => {
          navigate("/seekerhome");
        })
        .catch((error) => {
          console.error(error);
        });
  };

  return (
    <>
      <Header />
      <div className='main-container'>
        <div><SideMenuSeeker /></div>
        <div className='content-box'>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" ,marginTop:"-60px"}}>
            <form className="main" style={{ marginTop: "200px", paddingTop: "10px" }}>
              <FormLabel style={{marginLeft:"-175px",paddingLeft:"20px"}}>Name</FormLabel>
              <TextField
                onChange={handleInput}
                required
                name="name"
                value={i.name}
              />
              <FormLabel style={{marginLeft:"-175px",paddingLeft:"20px"}}>Address</FormLabel>
              <TextField
                onChange={handleInput}
                required
                name="address"
                multiline
                style={{ width: "224px" }}
                value={i.address}
              />
              <FormLabel style={{marginLeft:"-175px",paddingLeft:"20px"}}>Phone</FormLabel>
              <TextField
                onChange={handleInput}
                required
                name="phn"
                value={i.phn}
              />
              <FormLabel style={{marginLeft:"-175px",paddingLeft:"50px"}}>Qualification</FormLabel>
              <TextField
                onChange={handleInput}
                required
                name="course"
                value={i.qualification}
              />
              <FormLabel style={{marginLeft:"-175px",paddingLeft:"20px"}}>Email</FormLabel>
              <TextField
                onChange={handleInput}
                required
                name="email"
                value={i.email}
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                endIcon={<NoteAddIcon />}
              >
                Update Profile
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeekerProfile;
