import React from 'react'
import Navbar from '../../../components/Main/HomeNavbar/Navbar'
// import { Input, Space } from 'antd';
import { Button, TextField } from '@mui/material';
import '../Login/_style.scss'
import * as yup from 'yup';

import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { signUp } from '../../../api/LoginRegister.js';
import Swal from 'sweetalert2';

export default function NewAcc() {
    const navigate = useNavigate();

    const Validation = yup.object().shape({
        name: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
        username: yup.string().required('Zəhmət olmasa xananı doldurun'),
        // email: yup.min(3,'Zəhmət olmasa email hesabınızı yazın').required('Zəhmət olmasa xananı doldurun'),
        password: yup.string().min(3).required('Zəhmət olmasa xananı doldurun')
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password mismatch").required('Zəhmət olmasa xananı doldurun'),
    })


    const handleSubmit = async (values, actions) => {
        await signUp({
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
            isAdmin: false
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Uğurla qeydiyyatdan keçildi!',
            showConfirmButton: false,
            timer: 1200
        })
        actions.resetForm();
        navigate('/login');
        console.log(values);
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: handleSubmit,
        validationSchema: Validation,
    })
    return (
        <>
            <Navbar />
            <div className='login-div'>
                <div className='na-text'>
                    Yeni hesab yaradın
                </div>
                <div className='na-sub-text'>
                    Müvafiq xanalara məlumatları daxil edin
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column" }} className='input-div'>
                        <TextField
                            name="name"
                            label="Ad"
                            className="form-input"
                            type="text"
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.name && formik.touched.name ? (
                            <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.name}</span>
                        ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }} className='input-div' >
                        <TextField
                            type='text'
                            label='Soyad'
                            name="username"
                            className="form-input"
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.username && formik.touched.username ? (
                            <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.username}</span>
                        ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }} className='input-div'>
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            className="form-input"
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.email}</span>
                        ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }} className='input-div' >
                        <TextField
                            title="Minimum 1 rəqəm, 1 kiçik hərf və 1 böyük hərf olmalıdır"
                            type='password'
                            name="password"
                            label='Şifrəniz'
                            className="form-input"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password && formik.touched.password ? (
                            <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.password}</span>
                        ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }} className='input-div' >
                        <TextField
                            name="confirmPassword"
                            type="password"
                            className="form-input"
                            label='Şifrəniz yenidən'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                            <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.confirmPassword}</span>
                        ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
                    </div>
                    <div className='login-btn-div'>
                        <Button
                            disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
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
