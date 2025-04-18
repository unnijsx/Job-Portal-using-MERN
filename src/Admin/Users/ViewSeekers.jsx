import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SideMenuAdmin from "../SideMenu/sidemenuAdmin";
import Header from "../../Defaults/Header/header";
import '../../Styles/Main.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const ViewSeekers = () => {
  const [i, setI] = useState([]);
  const utype = localStorage.getItem("utype");

  useEffect(() => {
    axios.post(`http://localhost:8000/viewseekers`)
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
        <div><SideMenuAdmin /></div>
        <div className="view-box">
          <TableContainer component={Paper} className="viewtable">
            <Table style={{ marginTop: "70px" }} sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className="viewhead">
                <TableRow>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Name</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Address</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Phone</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Qualification</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Email</TableCell>
                  {utype === "admin" && (
                    <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Actions</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
  {i.map((row) => (
    <TableRow key={row._id}>
      <TableCell style={{ textAlign: "center" }}>{row.name}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.address}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.phn}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.qualification}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.email}</TableCell>
      {utype === "admin" && (
        <TableCell style={{ textAlign: "center" }}>
          <Link to={`/viewsingleseeker/${row._id}`}>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              View
            </Button>
          </Link>
        </TableCell>
      )}
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

export default ViewSeekers;
