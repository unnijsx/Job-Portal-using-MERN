import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../Styles/Main.css';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ForgotPass = () => {
  const navigate = useNavigate();
  const [logd, setLogd] = useState({
    username: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    setLogd({ ...logd, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/forgotpass', logd)
      .then((result) => {
        if (result.data.message === "Password updated successfully") {
          alert("Password updated successfully!");
          navigate('/');
        } else {
          alert("Some error happened. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Forgot password error:", error);
        alert("Something went wrong. Try again later.");
      });
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: '25ch' }} style={{marginTop:"-70px"}} variant="standard">
          <InputLabel htmlFor="email">Your Email</InputLabel>
          <Input
            id="email"
            type="email"
            name="username"
            value={logd.username}
            onChange={handleInput}
            required
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '25ch' }} style={{marginTop:"-70px"}} variant="standard">
          <InputLabel htmlFor="password">New Password</InputLabel>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={logd.password}
            onChange={handleInput}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button variant="contained" type="submit" style={{marginTop:"-70px"}} >Change Password</Button>
      </form>
    </div>
  );
};

export default ForgotPass;
