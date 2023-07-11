import React, { useEffect, useState } from 'react'
import './products.scss'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { deleteProductByID, getAllProducts, postProduct } from '../../../api/Product';
import Swal from 'sweetalert2'
import { Input } from 'antd';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false)

  const Validation = yup.object().shape({
    name: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    count: yup.number().required('Zəhmət olmasa xananı doldurun'),
    price: yup.number().required('Zəhmət olmasa xananı doldurun'),
    imageURL: yup.string().required('Zəhmət olmasa xananı doldurun'),
    releaseDate: yup.date().required('Zəhmət olmasa xananı doldurun'),
    categoryName: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    categoryID: yup.string().required('Zəhmət olmasa xananı doldurun'),
  })

  const handleSubmit = async (values, actions) => {
    setIsClicked(true)
    await postProduct(values)
    Swal.fire(
      'Əla!',
      `Məhsul uğurla əlavə olundu!`,
      'success'
    )
    actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      count: '',
      price: '',
      imageURL: '',
      releaseDate: '',
      categoryName: '',
      categoryID: ''
    },
    onSubmit: handleSubmit,
    validationSchema: Validation,
  })

  useEffect(() => {
    getAllProducts().then(res => {
      setProducts(res);
      setLoading(false);
    })
  }, [isClicked])

  return (
    <>
      {loading ? <div style={{ marginTop: "150px", textAlign: "center" }}>
        <span className="loader"></span></div> : (
        <>
          <main>
            <form onSubmit={formik.handleSubmit}>
              <div className='admin-p'>
                <p>Məhsul əlavə et</p>
              </div>
              <div className='admin-product-div'>
                <div className='admin-product-div'>
                  <Input
                    className='admin-product-inp'
                    placeholder='Ad'
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
                    placeholder='Say'
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
                    placeholder='Qiymət'
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
                    placeholder='Şəkil url'
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
                    placeholder='Kategoriya adı'
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
                    placeholder='Kategoriya İD'
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
              <div className='admin-product-div'>
                <div className='admin-product-div'>
                  <Input
                    className='admin-product-inp'
                    type="datetime-local"
                    name="releaseDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.releaseDate}
                  />
                  {formik.errors.releaseDate && formik.touched.releaseDate ? (
                    <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.releaseDate}</span>
                  ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}
                </div>
              </div>
              <div className='product-send'>
                <button
                  disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
                  type="submit"
                  style={{ cursor: "pointer" }}
                  className='input-div-Button'
                  variant="contained"
                >Göndər</button>
              </div>
            </form>
          </main>
          <section>
            <div>
              <div className='admin-p'>
                <p>Məhsullar</p>
              </div>
              <div className="products products-admin-card">
                {products && products.map((product) => {
                  return (
                    <div key={product._id} >
                      <div className='col'>
                        <div className='product-card'>
                          <div className='product-img-div'>
                            <img className='product-img' width={250} height={250} src={product.imageURL} alt="product" />
                            <div className='product-text'>
                              <p>{product.name}</p>
                              <p style={{ marginTop: "0.25rem", color: '#dc3545' }}>{product.count} ədəd</p>
                            </div>
                            <div className='product-count-basket'>
                              <p>{product.price} AZN</p>
                            </div>
                            <div style={{ marginLeft: "8px", lineHeight: "1.4" }}>
                              <h4>{product.categoryName}</h4>
                              <p><b>ID : </b> {product.categoryID}</p>
                            </div>
                            <div className='products-btn' style={{ display: "flex", marginTop: "10px" }}>
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
                                      deleteProductByID(product._id).then((res) => {
                                        Swal.fire(
                                          'Silindi!',
                                          'Faylınız silindi.',
                                          'success'
                                        )
                                      })
                                      setProducts(products.filter((x) => x._id !== product._id))
                                    }
                                  })
                                }}
                                className="editbtn">Sil</button>
                              <button className="editbtn">
                                <Link
                                  className="editLink"
                                  to={`/admin/products/edit/${product._id}`}>Redaktə et</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </>
      )}

    </>
  )
}