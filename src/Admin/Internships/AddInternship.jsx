import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Header from "../../Defaults/Header/header";
import Button from "@mui/material/Button";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SideMenuAdmin from "../SideMenu/sidemenuAdmin";

const AddInternship = () => {
  const navigate = useNavigate();
  const [i, setInternship] = useState({
    title: "",
    description: "",
    stipend: "",
    location: "",
    company: "",
    duration: ""
  });

  const [error, setError] = useState({});

  const handleInput = (e) => {
    setInternship({ ...i, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const utype = localStorage.getItem("utype");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (utype === "admin") {
      const payload = {
        ...i,
        stipend: Number(i.stipend),
        duration: Number(i.duration),
      };

      axios.post("http://localhost:8000/addinternship", payload)
        .then((result) => {
          navigate("/adminhome");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      window.alert("You are not authorized to use this!");
      navigate('/');
    }
  };

  return (
    <>
      <Header />
      <div className='main-container'>
        <div><SideMenuAdmin /></div>
        <div className='content-box'>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form className="main" style={{ marginTop: "200px", paddingTop: "10px" }}>
              <TextField
                onChange={handleInput}
                required
                label="Internship Title"
                name="title"
                value={i.title}
              />
              <TextField
                onChange={handleInput}
                required
                label="Description"
                name="description"
                multiline
                style={{ width: "224px" }}
                value={i.description}
              />
              <TextField
                onChange={handleInput}
                required
                name="stipend"
                label="Stipend"
                value={i.stipend}
              />
              <TextField
                onChange={handleInput}
                required
                name="location"
                label="Location"
                value={i.location}
              />
              <TextField
                onChange={handleInput}
                required
                name="company"
                label="Company"
                value={i.company}
              />
              <TextField
                onChange={handleInput}
                required
                label="Duration"
                name="duration"
                value={i.duration}
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                endIcon={<NoteAddIcon />}
              >
                Add Internship
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInternship;
