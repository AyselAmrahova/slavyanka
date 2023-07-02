import { useEffect, useState } from "react"
import { getUsers } from "../../../api/LoginRegister"
import { useNavigate } from "react-router-dom";
import './users.scss';

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
      <div className="admin-user-div">
        <ul><li>Name</li></ul>
        {users && users.map((user) => {
          return (
            <div >
              <li key={user._id}>{user.username}</li>
              <li>{user.name}</li>
              <li>{user.email}</li>
              {/* <li>{user}</li> */}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Users