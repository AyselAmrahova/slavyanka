import React from 'react'
import Navbar from '../../../components/Main/HomeNavbar/Navbar'
import { Button, TextField } from '@mui/material'
import '../Login/_style.scss'

export default function ForgetPassword() {
    return (
        <>
            <Navbar />
            <div className='login-div'>
                <div className='na-text'>
                    Şifrənizi bərpa edin
                </div>
                <div className='na-sub-text'>
                    E-mail adresinizə şifrənin bərpası üçün uyğun link göndəriləcək
                </div>
                <form>
                    <div className='input-div'>
                        <TextField
                            className="form-input"
                            label="info@slavyanka.az"
                            type="email" />
                    </div>
                    <div className='login-btn-div'>
                        <Button
                            className='login-btn'
                            variant="contained"
                            type="submit"
                        >Göndər</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
