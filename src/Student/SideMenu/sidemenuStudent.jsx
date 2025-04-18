import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import '../../Styles/Main.css';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import LockResetIcon from '@mui/icons-material/LockReset';

export default function SideMenuStudent() {
  const navigate = useNavigate();
  const handleLogout= ()=>{
    localStorage.removeItem("uid");
    localStorage.removeItem("utype");
    navigate('/');
  };

  return (
    <div style={{width:"230px",marginTop:"90px"}}>
      <ListItemButton href='/studenthome'>
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton href='/studentprofile'>
        <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton href='/viewinternshipsstudent'>
        <ListItemIcon>
          <AutoStoriesIcon/>
        </ListItemIcon>
            <ListItemText primary="Internships" />
          </ListItemButton>
          <ListItemButton href='/studentchangepass'>
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
