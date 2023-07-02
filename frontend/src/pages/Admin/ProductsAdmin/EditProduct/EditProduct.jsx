import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik'
import { putProduct, GetProductId } from '../../../../api/Product';
import { Input } from 'antd';
import * as Yup from "yup";

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function EditProduct() {
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
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(id);
  async function fetchData() {
    const datas = await GetProductId(id);
    setProduct(datas.data);

    formik.setValues({
      name: datas.data.name,
      count: datas.data.count,
      price: datas.data.price,
      imageURL: datas.data.imageURL,
      categoryName: datas.data.categoryName,
      categoryID: datas.data.categoryID,
    });
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = async (values, actions) => {
    putProduct(id, values);
    setProduct(values);
    navigate("/admin/products");
    actions.resetForm();
  };
  const ServiceSchema = Yup.object().shape({
    name: Yup.string().required(),
    count: Yup.number().required(),
    price: Yup.number().required(),
    imageURL: Yup.string().required(),
    categoryName: Yup.string().required(),
    categoryID: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      name: product.name,
      count: product.count,
      price: product.price,
      imageURL: product.imageURL,
      categoryName: product.categoryName,
      categoryID: product.categoryID,
    },
    onSubmit: handleSubmit,
    validationSchema: ServiceSchema,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='admin-p'>
          <p>Product add</p>
        </div>
        <div className='admin-product-div'>
          <div className='admin-product-div'>
            <Input
              className='admin-product-inp'
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
          </div>
          <div className='admin-product-div'>
            <Input
              className='admin-product-inp'
              name="count"
              placeholder='count'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.count}
            />
            {formik.errors.count && formik.touched.count ? (
              <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.count}</span>
            ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
          </div>
        </div>
        <div className='admin-product-div'>
          <div className='admin-product-div'>
            <Input
              name="price"
              className='admin-product-inp'
              placeholder='price'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.errors.price && formik.touched.price ? (
              <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.price}</span>
            ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
          </div>
          <div className='admin-product-div'>
            <Input
              name="imageURL"
              className='admin-product-inp'
              placeholder='imageURL'
              type="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
            />
            {formik.errors.imageURL && formik.touched.imageURL ? (
              <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.imageURL}</span>
            ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
          </div>
        </div>
        <div className='admin-product-div'>
          <div className='admin-product-div'>
            <Input
              className='admin-product-inp'
              placeholder='categoryName'
              name="categoryName"
              type='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.categoryName}
            />
            {formik.errors.categoryName && formik.touched.categoryName ? (
              <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.categoryName}</span>
            ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
          </div>
          <div className='admin-product-div'>
            <Input
              className='admin-product-inp'
              name="categoryID"
              placeholder='categoryID'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryID}
            />
            {formik.errors.categoryID && formik.touched.categoryID ? (
              <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.categoryID}</span>
            ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
          </div>
        </div>
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
              Redaktə olundu !
            </Alert>
          </Snackbar>
        </div>
      </form>
    </>
  )
}
