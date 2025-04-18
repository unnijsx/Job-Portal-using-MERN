import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from "../../Defaults/Header/header";
import '../../Styles/Main.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import SideMenuSeeker from "../SideMenu/sidemenuSeeker";

const ViewJobs = () => {
  const [i, setI] = useState([]);

  useEffect(() => {
    axios.post(`http://localhost:8000/viewjob`)
      .then((result) => {
        setI(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="main-container">
        <Header />
        <div><SideMenuSeeker /></div>
        <div className="view-box">
          <TableContainer component={Paper} className="viewtable">
            <Table style={{ marginTop: "70px" }} sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className="viewhead">
                <TableRow>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Title</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Description</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Salary</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Location</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Company</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Notice Period</TableCell>
                    <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Actions</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
  {i.filter(row => row.status === true).map((row) => (
    <TableRow key={row._id}>
      <TableCell style={{ textAlign: "center" }}>{row.title}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.description}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.salary}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.location}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.company}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.noticeperiod}</TableCell>
        <TableCell style={{ textAlign: "center" }}>
          <Link to={`/viewsinglejob/${row._id}`}>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              View
            </Button>
          </Link>
        </TableCell>
    </TableRow>
  ))}
    </TableBody>

            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default ViewJobs;
