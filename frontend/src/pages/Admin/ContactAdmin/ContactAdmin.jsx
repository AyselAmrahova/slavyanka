import React, { useEffect, useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { Input } from 'antd';
import { getAllContact, postContact, deleteContactByID } from '../../../api/Contact';
import './contact.scss'
import { Link } from 'react-router-dom';

export default function ContactAdmin() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([])

  const Validation = yup.object().shape({
    address: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    phone: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    email: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    connect: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
  })
  const handleSubmit = async (values, actions) => {
    await postContact(values)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Detallar əlavə olundu',
      showConfirmButton: false,
      timer: 1500,
      width: "400px",
      heightAuto: "80px"
    })
    actions.resetForm()
  }
  const formik = useFormik({
    initialValues: {
      address: '',
      phone: '',
      email: '',
      connect: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Validation,
  })

  useEffect(() => {
    getAllContact().then(res => {
      setContacts(res);
      setLoading(false);
    })
  }, [])
  return (
    <>
      {loading ? <div style={{ marginTop: "150px", textAlign: "center" }}><span class="loader"></span></div> : (
        <>
          <div style={{ textAlign: "center", marginTop: "30px", color: "#5e6e82" }}>
            <h3>Əlaqə məlumatları</h3>
          </div>
          <form className='admin-contact' onSubmit={formik.handleSubmit}>
            <div className='admin-contact-div'>
              <Input
                style={{
                  padding: "10px"
                }}
                placeholder='Address'
                type="text"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.errors.address && formik.touched.address ? (
                <span style={{ color: "#bb221a", marginTop: "10px" }}>{formik.errors.address}</span>
              ) : <span style={{ visibility: "hidden", marginTop: "10px" }}>error message</span>}
            </div>
            <div className='admin-contact-div'>
              <Input
                style={{
                  padding: "10px"
                }}
                placeholder='Telefon nömrəsi'
                type="text"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <span style={{ color: "#bb221a", marginTop: "10px" }}>{formik.errors.phone}</span>
              ) : <span style={{ visibility: "hidden", marginTop: "10px" }}>error message</span>}
            </div>
            <div className='admin-contact-div'>
              <Input
                style={{
                  padding: "10px"
                }}
                placeholder='Email'
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <span style={{ color: "#bb221a", marginTop: "10px" }}>{formik.errors.email}</span>
              ) : <span style={{ visibility: "hidden", marginTop: "10px" }}>error message</span>}
            </div>
            <div className='admin-contact-div'>
              <Input
                style={{
                  padding: "10px"
                }}
                placeholder='Qısa telefon nömrəsi'
                type="text"
                name="connect"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.connect}
              />
              {formik.errors.connect && formik.touched.connect ? (
                <span style={{ color: "#bb221a", marginTop: "10px" }}>{formik.errors.connect}</span>
              ) : <span style={{ visibility: "hidden", marginTop: "10px" }}>error message</span>}
            </div>
            <div className='admin-btn'>
              <button
                disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
                type="submit"
                style={{ cursor: "pointer" }}
                className='input-div-Button'
                variant="contained"
              >Əlavə et</button>
            </div>
          </form>
          <div>
            {contacts && contacts.map((contact) => {
              return (
                <div key={contact._id}>
                  <div className='admin-contact-card' key={contact._id}>
                    <p><b style={{ marginRight: "10px" }}>Address : </b>{contact.address}</p>
                    <p><b style={{ marginRight: "10px" }}>Əlaqə nömrəsi : </b> {contact.phone}</p>
                    <p><b style={{ marginRight: "10px" }}>Email : </b>{contact.email}</p>
                    <p><b style={{ marginRight: "10px" }}>Qısa telefon nömrəsi : </b>{contact.connect}</p>
                    <div className='admin-contact-btn'>
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
                              deleteContactByID(contact._id).then((res) => {
                                Swal.fire(
                                  'Deleted!',
                                  'Your file has been deleted.',
                                  'success'
                                )
                              })
                              setContacts(contacts.filter((x) => x._id !== contact._id))
                            }
                          })
                        }}
                        className="editbtn">Sil</button>
                      <button
                        style={{ padding: "5px", fontSize: "16px" }}>
                        <Link
                          to={`/admin/contact/edit/${contact._id}`}
                          style={{ color: "white" }}>Redaktə et</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

    </>
  )
}
