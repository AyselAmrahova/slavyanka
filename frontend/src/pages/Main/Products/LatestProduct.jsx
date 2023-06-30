import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../../api/requests';
import { Link } from 'react-router-dom';

const LatestProduct = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  // En son eklenen ürünü bulmak için releaseDate'e göre sıralıyoruz
  const latestProduct =
    products.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))[0];

  return (
    <div style={{ textAlign: "center", paddingTop: "15vh" }}>
      <h1>Ən son əlavə olunan məhsul</h1>
      {latestProduct && (
        <>
          <div className="products">
            <div className='products-col'>
              <div className='col'>
                <div className='product-card'>
                  <div className='product-img-div'>
                    <Link to={`http://localhost:3000/products/${latestProduct._id}`}>
                      <img className='product-img' width={250} height={250} src={latestProduct.imageURL} alt="product" />
                    </Link>
                    <div className='product-text'>
                      <p>{latestProduct.name}</p>
                      <p style={{ marginTop: "0.25rem", color: '#dc3545' }}>{latestProduct.count} ədəd</p>
                    </div>
                    <div className='product-count-basket'>
                      <p>{latestProduct.price} AZN</p>
                      <div className='product-basket'>
                        <img width={21} height={21} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHGSURBVHgBzVVBTuNAEKwee1c5rbw/8BPMZUNW2mX2B7svWCNy4Aa8gPAC4IaEEeEF5Ac4RBDgEviBf0AuICTCND2GSHY0FpDkQB2smZ5STU3PdJt0Pw5ZeQOAAgjMEzZ6P5MdzAEK3pdgLJwHPGxiTiD70YP1APd3Ift8IlPZiDPMAlbX3cX9f1SM/e43W6Tm45y+jr6rYkDVRjbXQ8wIcbyVLrSHJXEbYINdzATKYPy2HanJpVf3U8MYcd3Yy5ziuXvgCFOBsl5jvz2eKRdFGb+FKWBdl7aqIi5dNU/A0Hgn5LTd03pS4qtKMiPFByCnjSdjvouYtwRw/HIwvmFQ9fNkDJmp03u9xDfFjfJaBArtBXXrSYQp4RQX4f+5KcNHi/3VEO/ExYR754UuXTZvkfeYD4KQdn8kf8ZT5ebwcl5pnxnOtOizOGLP35bVQE6xldYPOlUCv86b68rjNTBlxKPltNHOxmvOtLDvHYuwlmEkz/BYD2Jn/u2TlZ/LtngMLV8MHRbXK4pIyEU8+BXPUemyK0RvijNxoe1SljaS1MVDzXSKFy85LrXryt6iL1f+wnCA2rdOurBTWaHa1oF6jGBoOGniGew+mLbFJMRAAAAAAElFTkSuQmCC" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LatestProduct;
