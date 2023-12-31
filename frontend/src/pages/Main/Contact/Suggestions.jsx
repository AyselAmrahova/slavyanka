import React from 'react'
import { useRef } from 'react'
import { TextField } from '@mui/material';
import './_suggestions.scss'
import emailjs from "@emailjs/browser";
import * as yup from 'yup';
import { useFormik } from 'formik'
import Swal from 'sweetalert2';

export default function Suggestions() {
  // mailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Detallar əlavə olundu',
      showConfirmButton: false,
      timer: 1500,
      width: "400px",
      heightAuto: "80px"
    })
    emailjs
      .sendForm(
        "service_71iykcp",
        "template_xq3g5un",
        form.current,
        "VAT0bKgAVTIR1F0JD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const Validation = yup.object().shape({
    user_name: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    user_username: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    user_email: yup.string().email('Email hesabınızı daxil edin').required('Zəhmət olmasa xananı doldurun'),
    message: yup.string().required('Zəhmət olmasa xananı doldurun'),
  })
  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_username: '',
      user_email: '',
      message: '',
    },
    onSubmit: sendEmail,
    validationSchema: Validation,
  })

  return (
    <>
      <main>
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='suggestions-text'>
            <p>Təklif və iradlarını bildir!</p>
            <p className='suggestions-text-2p'>Müştərilərimizin düşüncələri önəmlidir</p>
          </div>
          <div className='input-div'>
            <TextField
              label="Adınız"
              type="text"
              name="user_name"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_name}
            />
            {formik.errors.user_name && formik.touched.user_name ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.user_name}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div' >
            <TextField
              label='Soyadınız'
              className="form-input"
              name="user_username"
              type='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.user_username}
            />
            {formik.errors.user_username && formik.touched.user_username ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.user_username}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="user_email"
              className="form-input"
              label="Email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_email}
            />
            {formik.errors.user_email && formik.touched.user_email ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.user_email}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="message"
              className="form-input"
              id="outlined-multiline-static"
              label="Müştərilərimizin düşüncələri önəmlidir"
              multiline
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.errors.message && formik.touched.message ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.message}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <button
              disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
              style={{ cursor: "pointer" }}
              type="submit"
              className='input-div-Button'
              variant="contained"
            >Göndər</button>
          </div>
        </form>
      </main>
    </>
  )
}
