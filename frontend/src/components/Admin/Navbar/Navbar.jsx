import React, { useEffect, useState } from 'react'
import './_navbarStyle.scss'
import { Button } from '@mui/material';
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    }
  }, [])
  const navigate = useNavigate();

  return (
    <>
      <div className='admin-nav'>
        <ul style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          // height: "170px"
          paddingTop: "58px",
          paddingBottom: "58px"
        }}>
          <li >
            <Link to='http://localhost:3000/admin'>
              <img
                width={50}
                style={{
                  border: "1px solid #7a9ac5",
                  borderRadius: "50%",
                  overflow: "hidden",
                  padding: "5px"
                }}
                src="https://slavyanka.az/static/media/PersonLight.8bad44e1.svg"
                alt="admin" />
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Button style={{ border: '1px solid #7a9ac5' }} color="inherit">
                  <Link to='http://localhost:3000/admin'><p style={{ color: '#5e6e82', fontSize: "18px" }}>{JSON.parse(user).name}</p></Link>
                </Button>
              </li>
              <li>
                <Button onClick={async () => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  await setUser(null);
                  navigate('/');
                }} style={{}} color="inherit">
                  <FiLogOut style={{ fontSize: '23px' }} />
                </Button>
              </li>
            </>
          ) : (" ")}
        </ul>
        <ul className='admin-navbar'>
          <Link className='admin-navbar-link' to='' style={{ borderTop: "1px solid #7a9ac5" }}><li>Dashboard</li></Link>
          <Link className='admin-navbar-link' to='contact'><li>Contact</li></Link>
          <Link className='admin-navbar-link' to='categories'><li>Categories</li></Link>
          <Link className='admin-navbar-link' to='products'><li>Products</li></Link>
          <Link className='admin-navbar-link' to='imagees'><li>Multer</li></Link >
          <Link className='admin-navbar-link' to='users'><li>Users</li></Link >
        </ul >
      </div >
    </>
  )
}
