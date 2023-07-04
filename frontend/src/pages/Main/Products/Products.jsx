import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import './_productsStyle.scss'

import ProductItem from './ProductItem';
import { getAllCategories } from '../../../api/Category'
import Navbar from '../../../components/Main/NavbarOther/Navbar';
import { getAllProducts, getCategoryProducts } from '../../../api/Product';

export default function Products() {
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  const filterProducts = (e) => {
    let id = e.target.getAttribute('id');

    let lis = document.querySelectorAll(".products-actions-items");
    lis.forEach(x => {
      x.classList.remove("ON")
    })

    e.target.classList.add("ON")
    if (id === null) {
      getAllProducts().then((res) => {
        setProducts(res);
      });
    }
    else {
      getCategoryProducts(id).then(res => {
        setProducts(res)
      })
    }
  }

  const handleClick = () => {
    setData(JSON.parse(localStorage.getItem("basket")));
  }

  return (
    <>
      <Navbar data={data} />
      <div className='products-search'>
        <Input style={{ padding: "10px" }} onChange={(e) => setSearch(e.target.value)} placeholder="Axtarış" />
      </div>
      <div className='products-page'>
        <div className='products-header'>
          <span className="products-header-text">Saf, təbii və sağlam Slavyanka suları</span>
        </div>
        {loading ? <div style={{ textAlign: "center" }} ><span className="loader"></span></div> : (
          <div className='products-actions'>
            <div className='products-actions-col'>
              <ul id="products-main">
                <li className="products-actions-items ON" onClick={filterProducts}>Bütün məhsullar</li>
                {
                  categories.map((cat, index) => {
                    return <li key={index} onClick={filterProducts} id={cat._id} className="products-actions-items">{cat.name}</li>
                  })
                }
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="products">
        {products &&
          products
            .filter((item) => {
              return search.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(search)
            })
            .map((prod, index) => {
              return <ProductItem key={index} product={prod} onClick={handleClick} />
            })
        }
      </div>
    </>
  )
}
