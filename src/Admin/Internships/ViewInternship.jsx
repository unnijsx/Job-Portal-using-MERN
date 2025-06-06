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

const ViewInternship = () => {
  const [i, setI] = useState([]);
  const utype = localStorage.getItem("utype");

  useEffect(() => {
    axios.post(`http://localhost:8000/viewinternship`)
      .then((result) => {
        setI(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.post(`http://localhost:8000/deleteinternship/${id}`)
      .then(() => {
        setI(i.filter(intern => intern._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting internship:", error);
      });
  };

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
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Title</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Description</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Stipend</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Location</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Company</TableCell>
                  <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Duration</TableCell>
                  {utype === "admin" && (
                    <TableCell style={{ textAlign: "center", fontWeight: "600" }}>Actions</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
  {i.filter(row => row.status === true).map((row) => (
    <TableRow key={row._id}>
      <TableCell style={{ textAlign: "center" }}>{row.title}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.description}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.stipend}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.location}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.company}</TableCell>
      <TableCell style={{ textAlign: "center" }}>{row.duration}</TableCell>
      {utype === "admin" && (
        <TableCell style={{ textAlign: "center" }}>
          <Link to={`/updateinternship/${row._id}`}>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Update
            </Button>
          </Link>
          <Button
            onClick={() => handleDelete(row._id)}
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
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

export default ViewInternship;
