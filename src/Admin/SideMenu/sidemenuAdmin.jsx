import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import '../../Styles/Main.css';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';

export default function SideMenuAdmin() {
  const [open, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const navigate = useNavigate();
  const handleLogout= ()=>{
    localStorage.removeItem("uid");
    localStorage.removeItem("utype");
    navigate('/');
  };
  const handleAddInternship=()=>{
    navigate('/addinternship');
  };
  return (
    <div style={{width:"230px",marginTop:"90px"}}>
      <ListItemButton href='/adminhome'>
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <AutoStoriesIcon/>
        </ListItemIcon>
        <ListItemText primary="Internships" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={handleAddInternship} sx={{ pl: 4 }}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
            <ListItemText primary="Add Internship" />
          </ListItemButton>
          <ListItemButton href='/viewinternships' sx={{ pl: 4 }}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
            <ListItemText primary="View Internships" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
      <ListItemIcon>
          <WorkIcon/>
        </ListItemIcon>
        <ListItemText primary="Jobs" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton href='/addjob' sx={{ pl: 4 }}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
            <ListItemText  primary="Add Jobs" />
          </ListItemButton>
          <ListItemButton href='/viewjobs' sx={{ pl: 4 }}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
            <ListItemText primary="View Jobs" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick3}>
      <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Users" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton href='/viewstudents' sx={{ pl: 4 }}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
            <ListItemText primary="View Students" />
          </ListItemButton>
          <ListItemButton href='/viewseekers' sx={{ pl: 4 }}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
            <ListItemText primary="View Seekers" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon/>
        </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
    </div>
  );
}
