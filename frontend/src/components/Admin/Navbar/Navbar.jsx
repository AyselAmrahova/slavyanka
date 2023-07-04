import React from 'react'
import './_navbarStyle.scss'
import { Button } from '@mui/material';
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUserContext } from '../../../pages/Main/context/UserContext';

export default function Navbar() {
  const [user, setUser] = useUserContext();

  return (
    <>
      <div className='admin-navbar-all'>
        <div className='admin-nav'>
          <ul style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px"
          }}>
            <li>
              <Link to='http://localhost:3000/admin'>
                <img
                  width={50}
                  style={{
                    border: "1px solid #7a9ac5",
                    borderRadius: "50%",
                    overflow: "hidden",
                    padding: "10px"
                  }}
                  src="https://slavyanka.az/static/media/PersonLight.8bad44e1.svg"
                  alt="admin" />
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Button style={{ border: '1px solid #7a9ac5' }} color="inherit">
                    <Link to='http://localhost:3000/admin'><p style={{ color: '#5e6e82', fontSize: "16px" }}>Admin</p></Link>
                  </Button>
                </li>
                <li>
                  <Button onClick={async () => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    await setUser(null);
                  }} color="inherit"
                    style={{ border: '1px solid #7a9ac5', padding: "10px" }}
                  >
                    <FiLogOut style={{ fontSize: '21px', color: "#5e6e82" }} />
                  </Button>
                </li>
              </>
            ) : (
              <>
                <button>
                  <Link to='/login'>
                    Login
                  </Link></button></>
            )}
          </ul>
          <ul className='admin-navbar'>
            <Link className='admin-navbar-link' to='' ><li style={{ color: "#5e6e82" }}>Dashboard</li></Link>
            <Link className='admin-navbar-link' to='contact'><li style={{ color: "#5e6e82" }}>Contact</li></Link>
            <Link className='admin-navbar-link' to='categories'><li style={{ color: "#5e6e82" }}>Categories</li></Link>
            <Link className='admin-navbar-link' to='products'><li style={{ color: "#5e6e82" }}>Products</li></Link>
            <Link className='admin-navbar-link' to='cards'><li style={{ color: "#5e6e82" }}>Cards</li></Link >
            <Link className='admin-navbar-link' to='users'><li style={{ color: "#5e6e82" }}>Users</li></Link >
            <Link className='admin-navbar-link' to='imagees'><li style={{ color: "#5e6e82" }}>Multer</li></Link >
          </ul >
        </div >
      </div>
    </>
  )
}
