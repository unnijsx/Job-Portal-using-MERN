import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import '../../Styles/Main.css';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';
import LockResetIcon from '@mui/icons-material/LockReset';

export default function SideMenuSeeker() {
  const navigate = useNavigate();
  const handleLogout= ()=>{
    localStorage.removeItem("uid");
    localStorage.removeItem("utype");
    navigate('/');
  };

  return (
    <div style={{width:"230px",marginTop:"90px"}}>
      <ListItemButton href='/seekerhome'>
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton href='/seekerprofile'>
        <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton href='/viewjobseeker'>
        <ListItemIcon>
          <WorkIcon/>
        </ListItemIcon>
            <ListItemText primary="Jobs" />
          </ListItemButton>
          <ListItemButton href='/seekerchangepass'>
        <ListItemIcon>
          <LockResetIcon/>
        </ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItemButton>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon/>
        </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
    </div>
  );
}
