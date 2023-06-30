import React, { useEffect, useState } from 'react'
import './_productsStyle.scss'
import Navbar from './../../../components/Main/NavbarOther/Navbar';
import { Link, useParams } from 'react-router-dom';
import { GetProductId } from '../../../api/requests';

export default function ProductDetails() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    }
  }, [])

  const [product, setProduct] = useState({})
  const { id } = useParams()
  useEffect(() => {
    GetProductId(id).then((res) => {
      setProduct(res.data)
    })
  }, [id])
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
          <p className="colort1">{product.title}</p>
          {/* <p className="colort1">“Slavyanka” Azərbaycanın ilk qazsız qablaşdırılmış mineral süfrə suyu markasıdır və 2004-cü ildən bəri Gədəbəy dağlarındakı saf bulaqlardan toplanan sulardan əldə olunur. Hazırda dəniz səviyyəsindən 1500 metr hündürlükdə yerləşən Gədəbəy dağlarındakı 12 bulaqdan fabrikimizə su daxil olur. Bulaqlardan gələn sular Gədəbəyin Zəhmət kəndindəki fabrikdə toplanır, mineral tərkibi qorunmaqla çox detallı təmizləmə prosedurlarından keçir, istehsal olunur və Azərbaycanın bütün regionlarına çatdırılır.</p> */}
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
              <Link to='/products' style={{ color: "#3fc964" }}>
                Alış-verişə davam et
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
