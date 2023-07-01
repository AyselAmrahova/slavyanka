import React from 'react'
import { Button, TextField } from '@mui/material';
import './_style.scss'

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signIn } from '../../../api/requests';

import Swal from "sweetalert2";
import { useUserContext } from "../../Main/context/UserContext";
// import Navbar from './../../../components/Admin/Navbar/Navbar';

export default function Login() {

    const [user, setUser] = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = async (values, actions) => {
        const response = await signIn({
            email: values.email,
            password: values.password,
        });
        if (response.auth) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            setUser(response.user);
            actions.resetForm();
            navigate("/admin");
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
            {/* <Navbar /> */}
            <div style={{ marginTop: "90px" }} className='login-div'>
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
                </form>
            </div>
        </>
    )
}
