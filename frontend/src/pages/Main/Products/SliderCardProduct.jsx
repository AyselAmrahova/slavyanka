import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAllProducts } from '../../../api/Product';
import { Link } from 'react-router-dom';

export default function SliderCardProduct(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res);
        });
    }, []);

    // const [data, setData] = useState([]);

    const handleClick = (e) => {
        const id = e.target.id;
        const product = products.find(x=>x._id === id);
        console.log(product)
        if (id) {
            if (localStorage.getItem("basket")) {
                let basketItems = JSON.parse(localStorage.getItem("basket"));
                let basketItem = basketItems.find(x => x._id === id);
                if (basketItem !== undefined) {
                    basketItem.basketCount++;
                }
                else {
                    basketItem = { ...product, basketCount: 1 };
                    basketItems.push(basketItem);
                }

                localStorage.setItem("basket", JSON.stringify(basketItems))
                // setData(JSON.parse(localStorage.getItem("basket")))
            }
            else {
                localStorage.setItem("basket", JSON.stringify([{ ...product, basketCount: 1 }]))
            }
        }

        props.onClick();
    }
    return (
        <>
            <div style={{ textAlign: "center", paddingTop: "15vh" }}>
                <h1>Məhsullar</h1>
                <div style={{ width: "75%", margin: "0 auto" }}>
                    <Carousel responsive={responsive}>
                        {products && products.map((product) => {
                            return (
                                <div key={product._id} className='col'>
                                    <div className='product-card'>
                                        <div className='product-img-div'>
                                            <Link to={`http://localhost:3000/products/${product._id}`}>
                                                <img className='product-img' width={250} height={250} src={product.imageURL} alt="product" />
                                            </Link>
                                            <div className='product-text'>
                                                <p>{product.name}</p>
                                                <p style={{ marginTop: "0.25rem", color: '#dc3545' }}>{product.count} ədəd</p>
                                            </div>
                                            <div className='product-count-basket'>
                                                <p>{product.price} AZN</p>
                                                <div className='product-basket' onClick={handleClick} id={product._id}>
                                                    <img width={21} height={21} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHGSURBVHgBzVVBTuNAEKwee1c5rbw/8BPMZUNW2mX2B7svWCNy4Aa8gPAC4IaEEeEF5Ac4RBDgEviBf0AuICTCND2GSHY0FpDkQB2smZ5STU3PdJt0Pw5ZeQOAAgjMEzZ6P5MdzAEK3pdgLJwHPGxiTiD70YP1APd3Ift8IlPZiDPMAlbX3cX9f1SM/e43W6Tm45y+jr6rYkDVRjbXQ8wIcbyVLrSHJXEbYINdzATKYPy2HanJpVf3U8MYcd3Yy5ziuXvgCFOBsl5jvz2eKRdFGb+FKWBdl7aqIi5dNU/A0Hgn5LTd03pS4qtKMiPFByCnjSdjvouYtwRw/HIwvmFQ9fNkDJmp03u9xDfFjfJaBArtBXXrSYQp4RQX4f+5KcNHi/3VEO/ExYR754UuXTZvkfeYD4KQdn8kf8ZT5ebwcl5pnxnOtOizOGLP35bVQE6xldYPOlUCv86b68rjNTBlxKPltNHOxmvOtLDvHYuwlmEkz/BYD2Jn/u2TlZ/LtngMLV8MHRbXK4pIyEU8+BXPUemyK0RvijNxoe1SljaS1MVDzXSKFy85LrXryt6iL1f+wnCA2rdOurBTWaHa1oF6jGBoOGniGew+mLbFJMRAAAAAAElFTkSuQmCC" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel >
                </div>
            </div >
        </>
    )
}
