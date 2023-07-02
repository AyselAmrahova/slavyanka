import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik'
import { Input } from 'antd';
import { putContact, getContactByID } from '../../../api/Contact';
import './contact.scss'

export default function EditContact() {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();


  async function fetchData() {
    const datas = await getContactByID(id);
    setContact(datas.data);
    formik.setValues({
      address: datas.data.address,
      phone: datas.data.phone,
      email: datas.data.email,
      connect: datas.data.connect,
    });
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = async (values, actions) => {
    putContact(id, values);
    setContact(values);
    console.log(values);
    navigate("/admin/contact");
    actions.resetForm();
  };
  const Schema = Yup.object().shape({
    address: Yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    phone: Yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    email: Yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    connect: Yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
  });
  const formik = useFormik({
    initialValues: {
      address: contact.address,
      phone: contact.phone,
      email: contact.email,
      connect: contact.connect,
    },
    onSubmit: handleSubmit,
    validationSchema: Schema,
  });

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "30px", color: "#5e6e82" }}>
        <h3>Əlaqə məlumatları</h3>
      </div>
      <form className='admin-contact' onSubmit={formik.handleSubmit}>
        <div className='admin-contact-div'>
          <Input
            style={{ padding: "10px" }}
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
          >Göndər</button>
        </div>
      </form>
    </>
  )
}
