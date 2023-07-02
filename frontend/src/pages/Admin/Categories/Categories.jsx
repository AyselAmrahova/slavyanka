import React, { useEffect, useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { Input } from 'antd';
import { deleteCategorytByID, getAllCategories, postCategory } from '../../../api/Category';
import './categories.scss'
import { Link } from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Categories() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const Validation = yup.object().shape({
    name: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
  })
  const handleSubmit = async (values, actions) => {
    await postCategory(values)
    console.log(values);
    Swal.fire(
      'Good job!',
      `${values.name} succsessfully added!`,
      'success'
    )
    // console.log(values);
    actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Validation,
  })

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getAllCategories().then(res => {
      setCategories(res);
      console.log(res);
    })
  }, [])

  return (
    <>
      <main>
        <form onSubmit={formik.handleSubmit}>
          <div className='admin-p'>
            <p>Category add</p>
          </div>
          <div style={{
            width: "40%",
            margin: "0 auto"
          }}>
            <Input
              style={{
                padding: "10px"
              }}
              placeholder='name'
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.name}</span>
            ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}

            <div className='input-div'>
              <button
                disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
                type="submit"
                style={{ cursor: "pointer" }}
                className='input-div-Button'
                variant="contained"
                onClick={handleClick}
              >Göndər</button>

              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Əlavə olundu !
                </Alert>
              </Snackbar>
            </div>
          </div>
        </form>
        <div className='admin-category'>
          <div>
            {categories && categories.map((category) => {
              return (
                <div key={category._id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "10px"
                  }}>
                  <h4
                    style={{
                      color: "#010b16",
                      marginRight: "10px"
                    }}>{category.name}: </h4>
                  <li>{category._id}</li>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <button
                      style={{ padding: "5px", fontSize: "16px" }}
                      onClick={() => {
                        Swal.fire({
                          title: 'Are you sure?',
                          text: "You won't be able to revert this!",
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteCategorytByID(category._id).then((res) => {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            })
                            setCategories(categories.filter((x) => x._id !== category._id))
                          }
                        })
                      }}
                      className="editbtn">Delete</button>
                    <button style={{ padding: "5px", fontSize: "16px" }}><Link to={`/admin/categories/edit/${category._id}`} style={{ color: "black" }}>Edit</Link></button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main >
    </>
  )
}
