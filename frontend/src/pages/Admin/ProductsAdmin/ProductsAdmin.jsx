import React from 'react'
import './products.scss'
import { TextField } from '@mui/material';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
import * as yup from 'yup';
import { useFormik } from 'formik'
import { postProduct } from '../../../api/requests';
import Swal from 'sweetalert2'

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
export default function Products() {

  const Validation = yup.object().shape({
    name: yup.string().required('Required'),
    title: yup.string().required('Required'),
    count: yup.number().required('Required'),
    price: yup.number().required('Required'),
    imageURL: yup.string().required('Required'),
    releaseDate: yup.date().required('Required'),
    categoryName: yup.string().required('Required'),
    categoryID: yup.string().required('Required'),
  })
  const handleClick = async (values) => {
    await postProduct(values)
    console.log(values);
    Swal.fire(
      'Good job!',
      `${values.name} succsessfully added!`,
      'success'
    )
    // actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      title: '',
      count: '',
      price: '',
      imageURL: '',
      releaseDate: '',
      categoryName: '',
      categoryID: ''
    },
    onSubmit: handleClick,
    validationSchema: Validation,
  })


  return (
    <>
      <main>
        <form
          onSubmit={formik.handleSubmit}>
          <div className='suggestions-text'>
            <p>product added</p>
            <p className='suggestions-text-2p'>Müştərilərimizin düşüncələri önəmlidir</p>
          </div>
          <div className='input-div'>
            <TextField
              placeholder='name'
              type="text"
              name="name"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.name}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="count"
              className="form-input"
              placeholder='count'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.count}
            />
            {formik.errors.count && formik.touched.count ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.count}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="price"
              className="form-input"
              placeholder='price'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.errors.price && formik.touched.price ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.price}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="imageURL"
              className="form-input"
              placeholder='imageURL'
              type="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
            />
            {formik.errors.imageURL && formik.touched.imageURL ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.imageURL}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div' >
            <TextField
              placeholder='categoryName'
              className="form-input"
              name="categoryName"
              type='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.categoryName}
            />
            {formik.errors.categoryName && formik.touched.categoryName ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.categoryName}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="categoryID"
              className="form-input"
              placeholder='categoryID'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryID}
            />
            {formik.errors.categoryID && formik.touched.categoryID ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.categoryID}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              placeholder='releaseDate'
              type="datetime-local"
              name="releaseDate"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.releaseDate}
            />
            {formik.errors.releaseDate && formik.touched.releaseDate ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.releaseDate}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              type='text'
              name="title"
              className="form-input"
              id="outlined-multiline-static"
              placeholder='title'
              multiline
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.errors.title && formik.touched.title ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.title}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <button
              // disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
              type="submit"
              style={{ cursor: "pointer" }}
              className='input-div-Button'
              variant="contained"
              onClick={formik.handleClick}
            >Göndər</button>

            {/* success message (toasted) */}
            {/* <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Göndərildi !
              </Alert>
            </Snackbar> */}
          </div>
        </form>
      </main>

    </>
  )
}
