import React from 'react'
import Navbar from '../../../components/Main/HomeNavbar/Navbar'
import { Button, TextField } from '@mui/material';
import '../Login/_style.scss'
import { Link } from 'react-router-dom';


import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signIn } from '../../../api/requests';

import Swal from "sweetalert2";
import { useUserContext } from "../Login/context/UserContext";
export default function LoginM() {

  const [user, setUser] = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    const response = await signIn({
      email: values.email,
      password: values.password,
    });
    console.log(response); 
    if (response.auth) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      setUser(response.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User signed in successfully!",
        showConfirmButton: false,
        timer: 1200,
      });
      actions.resetForm();
      navigate("/");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Navbar />
      <div className='login-div'>
        <div className='login-desc'>Şəxsi kabinetə giriş</div>
        <form onSubmit={formik.handleSubmit}>
          <div className='input-div'>
            <TextField
              name="email"
              label="Email"
              type="email"
              className="form-input"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className='input-div' >
            <TextField
              type='password'
              name="password"
              label='Şifrəniz'
              className="form-input"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className='login-btn-div'>
            <Button
              className='login-btn'
              variant="contained"
              type="submit"
            >Daxil ol</Button>
          </div>
          <div className='login-forget-password-div'>
            <Link className='login-forget-password' to='http://localhost:3000/forget-password'>
              Şifrəmi unutdum
            </Link>
          </div>
          <div className='login-text'>
            <div>Hesabınız yoxdur?
              <span>
                <Link style={{ color: '#051934' }} to='http://localhost:3000/new-account'>
                  Qeydiyyatdan keçin.
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
