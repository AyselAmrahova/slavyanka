import React, { useEffect, useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { Input } from 'antd';
import './categories.scss'
import { Link } from 'react-router-dom';
import { deleteCategorytByID, getAllCategories, postCategory } from '../../../api/Category';
import { Paper, TableBody, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllCategories().then(res => {
      setCategories(res);
      setLoading(false);
    })
  }, [])

  const Validation = yup.object().shape({
    name: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
  })
  const handleSubmit = async (values, actions) => {
    await postCategory(values)
    Swal.fire(
      'Good job!',
      `${values.name} uğurla əlavə olundu!`,
      'success'
    )
    actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Validation,
  })

  return (
    <>
      {loading ? <div style={{ marginTop: "150px", textAlign: "center" }}><span class="loader"></span></div> : (
        <>
          <main>
            <form onSubmit={formik.handleSubmit}>
              <div className='admin-p'>
                <p>Kategoriya əlavə et</p>
              </div>
              <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Input
                  style={{ padding: "10px" }}
                  placeholder='Kategoriya adı'
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                  <span style={{ color: "#bb221a", marginTop: "15px" }}>{formik.errors.name}</span>
                ) : <span style={{ visibility: "hidden", marginTop: "15px" }}>error message</span>}

              </div>
              <div className='product-send'>
                <button
                  disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
                  type="submit"
                  style={{ cursor: "pointer", marginTop: "20px" }}
                  variant="contained"
                >Göndər</button>
              </div>
            </form>
            <div style={{ width: "100%" }} className='admin-category'>
              <div style={{ width: "60%", margin: "0 auto", marginTop: "60px" }} className="admin-user-div">
                <TableContainer style={{ width: "100%" }} component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Ad</TableCell>
                        <TableCell align='center'>ID</TableCell>
                        <TableCell align="center">Sil</TableCell>
                        <TableCell align="center">Redaktə et</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody style={{ width: "100%" }}>
                      {categories && categories.map((category) => {
                        return (
                          <TableRow style={{ width: "100%" }} key={category._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell component="th">{category.name}</TableCell>
                            <TableCell align="center">{category._id}</TableCell>
                            <TableCell align="center">
                              <button
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
                                className="editbtn category-delete-btn">Delete</button></TableCell>
                            <TableCell align="center">
                              <Link
                                className='category-delete-btn'
                                to={`/admin/categories/edit/${category._id}`}>
                                <button style={{ padding: "5px", fontSize: "16px" }}>
                                  Redaktə et
                                </button></Link>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody >
                  </Table>
                </TableContainer>
              </div>
            </div>
          </main >
        </>
      )}
    </>
  )
}
