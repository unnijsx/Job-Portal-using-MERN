import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../Images/Logos/online-recruitment.png'
import { Link } from 'react-router-dom';

export default function NewUserHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"white"}}>
        <Toolbar>
          <img src={Logo} alt='jnskjf'style={{width:"60px",marginRight:"20px",marginLeft:"30px"}}/>
          <Typography style={{color:"black",fontFamily:"Time  ",fontWeight:"900"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Seek
          </Typography>
          <Link to={'/register'}><Button>Register</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
