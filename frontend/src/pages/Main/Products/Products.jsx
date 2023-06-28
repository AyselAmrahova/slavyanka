import React from 'react'
import Navbar from '../../../components/Main/NavbarOther/Navbar';
export default function Products() {
  return (
    <>
      <Navbar />
    </>
  )
}



// import React, { useEffect, useState } from 'react'
// import Navbar from '../../../components/Main/NavbarOther/Navbar';
// import { Helmet } from "react-helmet";
// import './_productsStyle.scss'
// import { getAllCategories, getAllProducts } from '../../../api/requests';

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [activeBtn, setActiveBtn] = useState('');

//   const handlecategoryFilter = (category) => {
//     setActiveBtn(category)

//     if (category === "Bütün sular") {
//       setProducts(allProducts)
//       console.log(category);
//     } else {
//       const filtered = allProducts.filter((product) => {
//         return product.category && product.category.includes(category)
//       })
//       setProducts(filtered)
//     }
//   }

//   return (
//     <>
//       <button
//         className={activeBtn === 'Bütün sular' ? 'active' : ''}
//         onClick={() => handlecategoryFilter('Bütün sular')}>
//         Bütün sular</button>
//       {categories.map((category) => (
//         <button
//           key={category}
//           className={activeBtn === category ? 'active' : ''}
//         >{category}</button>
//       ))}
//     </>
//   )
// }
// import React, { useEffect, useState } from 'react'
// import Navbar from '../../../components/Main/NavbarOther/Navbar';
// import { Helmet } from "react-helmet";
// import './_productsStyle.scss'
// import { getAllCategories, getAllProducts } from '../../../api/requests';


// export default function Products() {

//   const [loading, setLoading] = useState(true);
//   console.log(loading);
//   useEffect(() => {
//     getAllCategories().then((res) => {
//       setCategories(res);
//       setLoading(false);
//     });
//   }, []);

//   useEffect(() => {
//     getAllProducts().then((res) => {
//       setProducts(res);
//     });
//   }, []);

  // const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [allProducts, setAllProducts] = useState([]);
  // const [activeBtn, setActiveBtn] = useState('');

//   const handlecategoryFilter = (category) => {
//     setActiveBtn(category)

//     if (category === "All") {
//       setProducts(allProducts)
//     } else {
//       const filtered = allProducts.filter((product) => {
//         return product.category && product.category.includes(category)
//       })
//       setProducts(filtered)
//       console.log(filtered);
//     }
//   }
//   return (
//     <>
//       <Helmet>
//         <title>Slavyanka || Products</title>
//       </Helmet>
//       <Navbar />
//       <div style={{ display: 'flex', justifyContent: "space-around" }}>
//         <div>
//           <button className={activeBtn === 'All' ? 'active' : ''
//         onclic}>All kategory</button>
//         </div>
//         {categories && categories.map((category) => {
//           return (
//             <ul key={category._id}>
//               <li>{category.name}</li>
//               {products.filter(x => x.categoryID === category._id).map((product) => (
//                 <div style={{ border: '1px solid red' }} key={product._id}>
//                   <p>{product.name}</p>
//                   <p>{product.title}</p>
//                   <p>{product.count}</p>
//                   <p>{product.price}</p>
//                   <p>{product.imageURL}</p>
//                 </div>
//               ))}
//             </ul>
//           )
//         })}
//       </div>
//       {/* <div className='products-page'>
//         <div className='products-header'>
//           <span className="products-header-text">Saf, təbii və sağlam Slavyanka suları</span>
//         </div>
//         <div className='products-actions'>
//           <div className='products-actions-col'>
//             <ul id="products-main">
//               <li className="active products-actions-items">Bütün sular</li>
//               <li className="products-actions-items">Qazlı</li>
//               <li className="products-actions-items">Qazsız</li>
//               <li className="products-actions-items">Bidon</li>
//               <li className="products-actions-items">Limonad</li>
//             </ul>
//           </div>
//         </div>
//         <div className='products'>
//           <div className='products-col'>
//             <div className='col'>
//               <div className='product-card'>
//                 <div className='product-img-div'>
//                   <img className='product-img' width={250} height={250} src="https://cdn.slavyanka.az/uploads/0700596d-d1dc-44c2-98ce-7f544c51a9a7.png" alt="" />
//                   <div className='product-text'>
//                     <p>19 l, PC (dispenser-Sadəcə Su)</p>
//                     <p style={{ marginTop: "0.25rem", color: '#dc3545' }}>1 ədəd</p>
//                   </div>
//                   <div className='product-count-basket'>
//                     <p>4.00 AZN</p>
//                     <div className='product-basket'>
//                       <img width={21} height={21} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHGSURBVHgBzVVBTuNAEKwee1c5rbw/8BPMZUNW2mX2B7svWCNy4Aa8gPAC4IaEEeEF5Ac4RBDgEviBf0AuICTCND2GSHY0FpDkQB2smZ5STU3PdJt0Pw5ZeQOAAgjMEzZ6P5MdzAEK3pdgLJwHPGxiTiD70YP1APd3Ift8IlPZiDPMAlbX3cX9f1SM/e43W6Tm45y+jr6rYkDVRjbXQ8wIcbyVLrSHJXEbYINdzATKYPy2HanJpVf3U8MYcd3Yy5ziuXvgCFOBsl5jvz2eKRdFGb+FKWBdl7aqIi5dNU/A0Hgn5LTd03pS4qtKMiPFByCnjSdjvouYtwRw/HIwvmFQ9fNkDJmp03u9xDfFjfJaBArtBXXrSYQp4RQX4f+5KcNHi/3VEO/ExYR754UuXTZvkfeYD4KQdn8kf8ZT5ebwcl5pnxnOtOizOGLP35bVQE6xldYPOlUCv86b68rjNTBlxKPltNHOxmvOtLDvHYuwlmEkz/BYD2Jn/u2TlZ/LtngMLV8MHRbXK4pIyEU8+BXPUemyK0RvijNxoe1SljaS1MVDzXSKFy85LrXryt6iL1f+wnCA2rdOurBTWaHa1oF6jGBoOGniGew+mLbFJMRAAAAAAElFTkSuQmCC" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </>
//   )
// }
