import { useEffect, useState } from "react"
import './users.scss';
import { Paper, TableBody, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getUsers } from "../../../api/LoginRegister"
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const filteredUsers = users.filter(user => !user.isAdmin);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUsers(localStorage.getItem('token')).then((res) => {
        setUsers(res.users);
        setLoading(false);
      });
    }
  }, [])

  return (
    <>
      {loading ? <div style={{ marginTop: "150px", textAlign: "center" }}>
        <span className="loader"></span></div> : (
        <>
          <div style={{ width: "50%", margin: "0 auto", marginTop: "60px" }} className="admin-user-div">
            <TableContainer style={{ width: "100%" }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Username</TableCell>
                    <TableCell align="left">Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ width: "100%" }}>
                  {filteredUsers && filteredUsers.map((data) => {
                    return (
                      <TableRow style={{ width: "100%" }} key={data._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                        <TableCell component="th">{data.isAdmin ? "" : data.name}</TableCell>
                        <TableCell align="left">{data.username}</TableCell>
                        <TableCell align="left">{data.email}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody >
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </>
  )
}

export default Users