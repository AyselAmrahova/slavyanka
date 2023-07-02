import { useEffect, useState } from "react"
import { getUsers } from "../../../api/LoginRegister"
import { useNavigate } from "react-router-dom";
import './users.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  }, [])
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUsers(localStorage.getItem('token')).then((res) => {
        setUsers(res.users);
      });
    }
  }, [])

  return (
    <>
      <div style={{ width: "60%", margin:"0 auto", marginTop:"60px" }} className="admin-user-div">
        <TableContainer style={{  width: "100%" }} component={Paper}>
          <Table  sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ width: "100%" }}>
              {users && users.map((user) => {
                return (
                  <TableRow style={{ width: "100%" }} key={user._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                    <TableCell component="th">{user.name}</TableCell>
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody >
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Users