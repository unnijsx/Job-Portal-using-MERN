import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Header from "../../Defaults/Header/header";
import Button from "@mui/material/Button";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SideMenuAdmin from "../SideMenu/sidemenuAdmin";

const AddJob = () => {
  const navigate = useNavigate();
  const [J, setJob] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
    company: "",
    noticeperiod: ""
  });

  const [error, setError] = useState({});

  const handleInput = (e) => {
    setJob({ ...J, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const utype = localStorage.getItem("utype");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (utype === "admin") {
      const payload = {
        ...J,
        salary: Number(J.salary),
        noticeperiod: Number(J.noticeperiod),
      };

      axios.post("http://localhost:8000/addjob", payload)
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
                label="Job Title"
                name="title"
                value={J.title}
              />
              <TextField
                onChange={handleInput}
                required
                label="Description"
                name="description"
                multiline
                style={{ width: "224px" }}
                value={J.description}
              />
              <TextField
                onChange={handleInput}
                required
                name="salary"
                label="Salary"
                value={J.salary}
              />
              <TextField
                onChange={handleInput}
                required
                name="location"
                label="Location"
                value={J.location}
              />
              <TextField
                onChange={handleInput}
                required
                name="company"
                label="Company"
                value={J.company}
              />
              <TextField
                onChange={handleInput}
                required
                label="Notice Period"
                name="noticeperiod"
                value={J.noticeperiod}
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                endIcon={<NoteAddIcon />}
              >
                Add Job
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJob;
