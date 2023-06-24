// import { useForm } from "react-hook-form";
import React from 'react'
import { useRef } from 'react'
import { Button, TextField } from '@mui/material';
import './_suggestions.scss'
import emailjs from "@emailjs/browser";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as yup from 'yup';
import { useFormik } from 'formik'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Suggestions() {
  // mailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
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
          setOpen(true);

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);


  // success message (toasted)
  // const handleClick = () => {
  //   setOpen(true);
  // };
  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpen(false);
  // };


  const Validation = yup.object().shape({
    user_name: yup.string().required('Required'),
    user_username: yup.string().required('Required'),
    email: yup.string().required('Required'),
    message: yup.string().required('Required'),
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





  // input validation
  // const {
  //   suggestion,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: "all",
  // });
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

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
            {formik.errors.user_name && formik.touched.user_name && (
              <span style={{ color: "red" }}>{formik.errors.user_name}</span>
            )}
          </div>
          <div className='input-div' >
            <TextField
              label='Soyadınız'
              className="form-input"
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_username}
              name="user_username" />
            {formik.errors.user_username && formik.touched.user_username && (
              <span style={{ color: "red" }}>{formik.errors.user_username}</span>
            )}
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
            {formik.errors.user_email && formik.touched.user_email && (
              <span style={{ color: "red" }}>{formik.errors.user_email}</span>
            )}
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
            {formik.errors.message && formik.touched.message && (
              <span style={{ color: "red" }}>{formik.errors.message}</span>
            )}
          </div>
          <div className='input-div'>
            <Button
              onClick={sendEmail}
              type="submit"
              value="Send"
              className='input-div-Button'
              variant="contained"
            >Göndər</Button>

            {/* success message (toasted) */}
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Qeyd olundu !
              </Alert>
            </Snackbar>
          </div>
        </form>
      </main>

      {/* <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <input
            {...suggestion("userName", {
              required: "Username is Required...",
              minLength: {
                value: 3,
                message: "Username must be atleast 3 characters long...",
              },
              maxLength: {
                value: 30,
                message: "Username must be atmost 30 characters long...",
              },
            })}
            placeholder="Username"
          />
          <p>{errors.userName?.message}</p>
          <input
            {...suggestion("email", {
              required: "Email is Required...",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email must be valid",
              },
            })}
            placeholder="Email"
          />
          <p>{errors.email?.message}</p>
          <input
            {...suggestion("password", {
              required: "Password is Required...",
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                message:
                  "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
              },
            })}
            placeholder="Password"
          />
          <p>{errors.password?.message}</p>
        </form> */}
    </>
  )
}
