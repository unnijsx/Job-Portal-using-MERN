import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideMenuStudent from "../SideMenu/sidemenuStudent";
import Header from "../../Defaults/Header/header";

const StudentChangePass = () => {
  const navigate = useNavigate();
  const [passwordAgain, setPasswordAgain] = useState("");
  const [user, setUser] = useState({
    oldPass: "",
    newPass: ""
  });

  const [error, setError] = useState({});
  const id = localStorage.getItem("uid");

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.newPass !== passwordAgain) {
      alert("Passwords do not match!");
      return;
    }

    axios.post(`http://localhost:8000/studentchangepass/${id}`, user)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error changing password:", error);
      });
  };

  return (
    <div className="main-container">
      <Header />
      <div><SideMenuStudent /></div>
      <div className="content-box">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", marginTop: "-60px" }}>
          <form className="main" onSubmit={handleSubmit} style={{ marginTop: "200px", paddingTop: "10px" }}>
            <TextField
              required
              type="password"
              label="Old Password"
              name="oldPass"
              value={user.oldPass}
              onChange={handleInput}
              margin="normal"
            />
            <TextField
              required
              type="password"
              label="New Password"
              name="newPass"
              value={user.newPass}
              onChange={handleInput}
              margin="normal"
            />
            <TextField
              required
              type="password"
              label="Confirm Password"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Change Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentChangePass;
