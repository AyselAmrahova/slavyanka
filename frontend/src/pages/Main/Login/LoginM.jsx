import React from 'react'
import Navbar from '../../../components/Main/HomeNavbar/Navbar'
import { Button, TextField } from '@mui/material';
import '../Login/_style.scss'
import { Link } from 'react-router-dom';
export default function LoginM() {
  return (
    <>
      <Navbar />
      <div className='login-div'>
        <div className='login-desc'>Şəxsi kabinetə giriş</div>
        <form>
          <div className='input-div'>
            <TextField label="Email"
              className="form-input"
              type="email" />
          </div>
          <div className='input-div' >
            <TextField label='Şifrəniz'
              className="form-input"
              type='password' />
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
