import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Main/NavbarOther/Navbar';
import { getAllCategories, getAllProducts, getCategoryProducts } from '../../../api/requests';
import ProductItem from './ProductItem';
import './_productsStyle.scss'
import { Input } from 'antd';

export default function Products() {
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
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
  return (
    <>
      <Navbar />
      <div className='products-search'>
        <Input style={{ padding: "10px" }} onChange={(e) => setSearch(e.target.value)} placeholder="Axtarış" />
      </div>
      <div className='products-page'>
        <div className='products-header'>
          <span className="products-header-text">Saf, təbii və sağlam Slavyanka suları</span>
        </div>
        <div className='products-actions'>
          <div className='products-actions-col'>
            <ul id="products-main">
              <li className="products-actions-items" onClick={filterProducts}>Bütün məhsullar</li>
              {
                categories.map((cat, index) => {
                  return <li key={index} onClick={filterProducts} id={cat._id} className="products-actions-items">{cat.name}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="products">
        {products &&
          products
            .filter((item) => {
              return search.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(search)
            })
            .map((prod, index) => {
              return <ProductItem key={index} product={prod} />
            })
        }
      </div>
    </>
  )
}
