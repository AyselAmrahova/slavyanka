import React, { useEffect, useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { Input } from 'antd';
// import './categories.scss'
import { Link } from 'react-router-dom';
import { deleteCardByID, getAllCards, postCard } from '../../../api/Cards';
import { Paper, TableBody, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

export default function Cards() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCards().then(res => {
      setCards(res);
      setLoading(false);
    })
  }, [])

  const Validation = yup.object().shape({
    title: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    desc: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    imageURL: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
  })
  const handleSubmit = async (values, actions) => {
    await postCard(values)
    Swal.fire(
      'Good job!',
      `Data uğurla əlavə olundu!`,
      'success'
    )
    actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      desc: '',
      imageURL: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Validation,
  })
  return (
    <>
      {loading ? <div style={{ marginTop: "150px", textAlign: "center" }}><span className="loader"></span></div> : (
        <>
          <main>
            <form onSubmit={formik.handleSubmit}>
              <div className='admin-p'>
                <p>Kart əlavə et</p>
              </div>
              <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Input
                  style={{ padding: "10px" }}
                  placeholder='Kart başlığı'
                  type="text"
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
                {formik.errors.title && formik.touched.title ? (
                  <span style={{ color: "#bb221a", marginTop: "15px", marginBottom: "15px" }}>{formik.errors.title}</span>
                ) : <span style={{ visibility: "hidden", marginTop: "15px", marginBottom: "15px" }}>error message</span>}
              </div>

              <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Input
                  style={{ padding: "10px" }}
                  placeholder='Kart şəkil url'
                  type="text"
                  name="imageURL"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.imageURL}
                />
                {formik.errors.imageURL && formik.touched.imageURL ? (
                  <span style={{ color: "#bb221a", marginTop: "15px", marginBottom: "15px" }}>{formik.errors.imageURL}</span>
                ) : <span style={{ visibility: "hidden", marginTop: "15px", marginBottom: "15px" }}>error message</span>}
              </div>
              <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <TextArea
                  style={{ padding: "10px" }}
                  placeholder='Kart təsviri'
                  type="text"
                  name="desc"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.desc}
                  rows={4}
                />
                {formik.errors.desc && formik.touched.desc ? (
                  <span style={{ color: "#bb221a", marginTop: "15px", marginBottom: "15px" }}>{formik.errors.desc}</span>
                ) : <span style={{ visibility: "hidden", marginTop: "15px", marginBottom: "15px" }}>error message</span>}
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
            <div style={{ width: "100%", marginBottom: "20px" }} className='admin-category'>
              <div style={{ width: "90%", margin: "0 auto", marginTop: "60px", paddingBottom: "80px" }} className="admin-user-div">
                <TableContainer style={{ width: "100%" }} component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Başlıq</TableCell>
                        <TableCell align='left'>Təsviri</TableCell>
                        <TableCell align="center">Sil</TableCell>
                        <TableCell align="center">Redaktə et</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody style={{ width: "100%" }}>
                      {cards && cards.map((card) => {
                        return (
                          <TableRow style={{ width: "100%" }} key={card._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell
                              component="th">
                              <img width={40} style={{ marginRight: "15px" }} src={card.imageURL} alt="" />{card.title}</TableCell>
                            <TableCell style={{ whiteSpace: "wrap" }} align="left">{card.desc}</TableCell>
                            <TableCell align="center">
                              <button
                                onClick={() => {
                                  Swal.fire({
                                    title: 'Əminsən?',
                                    text: "Bunu geri qaytara bilməyəcəksiniz!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Bəli, silin!'
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                      deleteCardByID(card._id).then((res) => {
                                        Swal.fire(
                                          'Silindi!',
                                          'Faylınız silindi.',
                                          'success'
                                        )
                                      })
                                      setCards(cards.filter((x) => x._id !== card._id))
                                    }
                                  })
                                }}
                                className="editbtn category-delete-btn">Delete</button></TableCell>
                            <TableCell align="center">
                              <Link
                                className='category-delete-btn'
                                to={`/admin/cards/edit/${card._id}`}>
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
      )
      }
    </>
  )
}
