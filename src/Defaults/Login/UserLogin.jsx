import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../Styles/Main.css';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const UserLogin = () => {
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

    axios.post('http://localhost:8000/login', logd)
      .then((result) => {        
        if (result.data.message === "student") {
          localStorage.setItem("uid", result.data.data._id);
          localStorage.setItem("utype","student");
          navigate('/studenthome');
        }
        else if (result.data.message === "admin") {
          localStorage.setItem("utype","admin");
          localStorage.setItem("uid", result.data._id);
          navigate('/adminhome');
        }
        else if (result.data.message === "seeker") {
          localStorage.setItem("utype","seeker");
          localStorage.setItem("uid", result.data.data._id);
          navigate('/seekerhome');
        }
        else {
          window.alert("Username or Password is incorrect");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            name="username"
            value={logd.email}
            onChange={handleInput}
          />
        </FormControl>

        <FormControl style={{marginTop:"-90px"}} sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={logd.pass}
            onChange={handleInput}
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

        <Button style={{marginTop:"-70px"}} variant="contained" type="submit">Login</Button>
        <Link style={{marginTop:"-90px"}}  to='/register'>New user? Register now!</Link>
        <Link style={{marginTop:"-90px"}}  to='/forgotpassword'>Forgot Password!</Link>
      </form>
    </div>
  );
};

export default UserLogin;
