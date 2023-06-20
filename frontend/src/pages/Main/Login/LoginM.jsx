import React from 'react'
import Navbar from '../../../components/Main/HomeNavbar/Navbar'
import { Button, TextField } from '@mui/material';
import '../Login/_style.scss'
export default function LoginM() {
  return (
    <>
      <Navbar />
      <div className='login-div'>
        <div className='login-text'>Şəxsi kabinetə giriş</div>
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
          <div className='input-div'>
            <Button
              className='input-div-Button'
              variant="contained"
              type="submit"
            >Daxil ol</Button>
          </div>

          <div class="d-flex mt-5 pt-1 pb-2 col-12 justify-content-center fp-text">
            Şifrəmi unutdum
          </div>
          <div class="d-flex col-12 pt-3 justify-content-center align-items-center pb-5">
            <div class="reg-text bord d-block d-sm-flex col-9  justify-content-center align-items-center">
              Hesabınız yoxdur?
              <span class="rgnote ml-sm-1">Qeydiyyatdan keçin.
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
