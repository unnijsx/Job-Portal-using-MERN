import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Header from "../Header/header";
import "../../Styles/registerStyle.css";

const Register = () => {
  const navigate = useNavigate();
  const [u, setUser] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
    phn: "",
    type: "student",
    qualification: ""
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInput = (e) => {
    setUser({ ...u, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("name", u.name);
    formData.append("email", u.email);
    formData.append("address", u.address);
    formData.append("phn", u.phn);
    formData.append("age", u.age);
    formData.append("qualification", u.qualification);
    formData.append("password", password);
    console.log("Selected role:", u.type);

    const endpoint =
      u.type === "seeker"
        ? "http://localhost:8000/seekerregister"
        : "http://localhost:8000/studentregister";

    axios
      .post(endpoint, formData)
      .then((res) => {
        alert("Registered successfully");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Registration failed");
      });
  };

  const roles = [
    { value: "student", label: "Student" },
    { value: "seeker", label: "Job Seeker" },
  ];

  return (
    <div>
      <Header />
      <form className="main" onSubmit={handleSubmit}>
        <TextField required label="Name" name="name" onChange={handleInput} />
        <TextField required label="Email" name="email" onChange={handleInput} />
        <TextField required label="Address" name="address" onChange={handleInput} />
        <TextField required label="Phone" name="phn" onChange={handleInput} />
        <TextField required label="Age" name="age" onChange={handleInput} />
        <TextField required label="Qualification" name="qualification" onChange={handleInput} />
        <TextField required label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <TextField required label="Confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <TextField
          select
          label="Role"
          name="type"
          value={u.type}
          onChange={handleInput}
          helperText="Select your role"
          style={{ width: "222px" }}
          SelectProps={{ native: true }}
        >
          {roles.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <Button type="submit" variant="contained" endIcon={<HowToRegIcon />}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
