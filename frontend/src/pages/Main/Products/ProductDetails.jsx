import React, { useEffect, useState } from 'react'
import './_productsStyle.scss'
import Navbar from './../../../components/Main/NavbarOther/Navbar';
import { Link, useParams } from 'react-router-dom';
import { GetProductId, getCategoryProducts } from '../../../api/requests';
// import { getCategoryProducts} from '../../../api/requests';

export default function ProductDetails() {
  const [user, setUser] = useState(null);
  const [productsCategory, setProductsCategory] = useState([])
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    }
  }, [])


  // const categoryID = undefined

  useEffect(() => {
    GetProductId(id).then((res) => {
      setProduct(res.data)
    })

    // getCategoryProducts(product.categoryID).then((res) => {
    //   console.log("salam")
    //   setProductsCategory(res.data)
    // })
  }, [id])

  useEffect(() => {
    if (product.categoryID) {
      getCategoryProducts(product.categoryID).then((res) => {
        console.log(res)
        setProductsCategory(res)
      })
    }
  }, [id, product])

  console.log(productsCategory)

  return (
    <>
      <Navbar />
      <div key={product._id} className='oneProduct'>
        <div className='one-product-image'>
          <img height={500} src={product.imageURL} alt="" />
        </div>
        <div className='one-product-desc'>
          <h2>{product.name}</h2>
          <p className="colort2">{product.categoryName}</p>
          <p className="colort1">“Slavyanka” Azərbaycanın ilk qazsız qablaşdırılmış mineral süfrə suyu markasıdır və 2004-cü ildən bəri Gədəbəy dağlarındakı saf bulaqlardan toplanan sulardan əldə olunur. Hazırda dəniz səviyyəsindən 1500 metr hündürlükdə yerləşən Gədəbəy dağlarındakı 12 bulaqdan fabrikimizə su daxil olur. Bulaqlardan gələn sular Gədəbəyin Zəhmət kəndindəki fabrikdə toplanır, mineral tərkibi qorunmaqla çox detallı təmizləmə prosedurlarından keçir, istehsal olunur və Azərbaycanın bütün regionlarına çatdırılır.</p>
          <div className='makro-elements'>
            <div className="colort4"> CA2+ - &lt;32mq/l </div>
            <div className="colort4"> Na+-&lt;25mq/l</div>
            <div className="colort4"> HCO-3 - &lt;125mq/l </div>
            <div className="colort4">J- - &lt;0.011mq/l</div>
            <div className="colort4">pH-7.10-7.70 </div>
            <div className="colort4"> SO42- - &lt;30mq/l </div>
            <div className="colort4"> K+-&lt;1mq/l </div>
            <div className="colort4"> Cl--&lt;5mq/l </div>
            <div className="colort4">Mg2+-&lt;7mq/l</div>
          </div>
          <div className='one-product-count'>
            <div style={{ display: "flex" }}>
              <p className='colort1'>Məhsulun qiyməti:</p>
              <p className='one-product-price'>{product.price} <span>AZN</span></p>
            </div>
          </div>
          <div className='one-product-basket-div'>
            <div className='one-product-basket'>
              <div className='one-product-basket-icon'>
                <img style={{ verticalAlign: 'middle' }} src="https://slavyanka.az/static/media/ShoppingLight.8e403ab1.svg" alt="shop" />
              </div>
              {user ? (
                <div className='order-complete'>
                  Sifarişi tamamla
                </div>
              ) : (
                <div style={{ opacity: ".4", cursor: "default" }} className='order-complete'>
                  Sifarişi tamamla
                </div>
              )}
            </div>
            <div className='continue-shop'>
              <Link to='http://localhost:3000/products' style={{ color: "#3fc964" }}>
                Alış-verişə davam et
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">Oxşar məhsullar</h2>
        <div className="products">
          {productsCategory && productsCategory.map(x => {
            return <div key={x._id} className='products-col'>
              <div className='col'>
                <div className='product-card'>
                  <div className='product-img-div'>
                    <img className='product-img' width={250} height={250} src={x.imageURL} alt="" />
                    <div className='product-text'>
                      <p>{x.name}</p>
                      <p style={{ marginTop: "0.25rem", color: '#dc3545' }}>{x.count} ədəd</p>
                    </div>
                    <div className='product-count-basket'>
                      <p>{x.price} AZN</p>
                      <div className='product-basket'>
                        <img width={21} height={21} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHGSURBVHgBzVVBTuNAEKwee1c5rbw/8BPMZUNW2mX2B7svWCNy4Aa8gPAC4IaEEeEF5Ac4RBDgEviBf0AuICTCND2GSHY0FpDkQB2smZ5STU3PdJt0Pw5ZeQOAAgjMEzZ6P5MdzAEK3pdgLJwHPGxiTiD70YP1APd3Ift8IlPZiDPMAlbX3cX9f1SM/e43W6Tm45y+jr6rYkDVRjbXQ8wIcbyVLrSHJXEbYINdzATKYPy2HanJpVf3U8MYcd3Yy5ziuXvgCFOBsl5jvz2eKRdFGb+FKWBdl7aqIi5dNU/A0Hgn5LTd03pS4qtKMiPFByCnjSdjvouYtwRw/HIwvmFQ9fNkDJmp03u9xDfFjfJaBArtBXXrSYQp4RQX4f+5KcNHi/3VEO/ExYR754UuXTZvkfeYD4KQdn8kf8ZT5ebwcl5pnxnOtOizOGLP35bVQE6xldYPOlUCv86b68rjNTBlxKPltNHOxmvOtLDvHYuwlmEkz/BYD2Jn/u2TlZ/LtngMLV8MHRbXK4pIyEU8+BXPUemyK0RvijNxoe1SljaS1MVDzXSKFy85LrXryt6iL1f+wnCA2rdOurBTWaHa1oF6jGBoOGniGew+mLbFJMRAAAAAAElFTkSuQmCC" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}
