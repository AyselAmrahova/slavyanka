import React, { useEffect, useState } from 'react'
import './basket.scss'
import Navbar from './../../../components/Main/NavbarOther/Navbar';
import { getAllProducts } from '../../../api/requests';

export default function Basket() {
    const [products, setProducts] = useState([]);
    const [ count, setCount ] = useState(0);
    const basketArr = [];
    useEffect(() => {
        getAllProducts().then(res => {
            setProducts(res);
        })
    }, [])

    JSON.parse(localStorage.getItem("basket")).forEach(element => {
        for (let i = 0; i < products.length; i++) {
            if (products[i]._id === element.id) {
                basketArr.push({...products[i],count:element.basketCount});
            }
        }
    });

    const decrementHandler = () => {
        setCount(count !== 0 ? count-1 : count);
    }

    const incrementHandler = () => {
        setCount(count+1);
    }

    return (
        <>
            <Navbar />
            <main className='basket-page'>
                <div className='basket-content'>
                    <h1>Səbət</h1>
                    <div className='basket-items-list'>
                        <div className='basket'>
                            {basketArr.map(x => {
                                return <div className='basket-products'>
                                    <div className='basket-product'>
                                        <div className="basket-product-img">
                                            <img width="80px" alt="productImg" src={x.imageURL} />
                                        </div>
                                        <div className="basket-product-details">
                                            <div className='product-name'></div>
                                            <div className='product-count'>
                                                <span className="solorized">Say: </span> <span>{x.count}</span>
                                            </div>
                                            <div className="product-total-amount">
                                                <span class="solorized">Ümumi məbləğ:</span> <span>{x.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='buttons'>
                                        <div className='pmcounter'>
                                            <div className='eMS'>
                                                <div className="counter el-center" onClick={decrementHandler}>-</div>
                                                <div className="counter-num">{count}</div>
                                                <div className="counter el-center" onClick={incrementHandler}>+</div>
                                            </div>
                                        </div>
                                        <div className="delete-from-basket">
                                            <div className="icon">
                                                <img src="https://slavyanka.az/static/media/TrashBox.96f72515.svg" alt="delete-icon" />
                                            </div>
                                            <span className="cpointer">Səbətdən sil</span>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div id="basketPrice">
                    <div class="basket-amount">
                        <h1>Yekun</h1>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="total-div">
                                <div className="col-12">
                                    <div className="subtotal">
                                        <div>Subtotal</div>
                                        <div>8.40</div>
                                    </div>
                                    <div className="cargo">
                                        <div>Çatdırılma</div>
                                        <div>0.00AZN</div>
                                    </div>
                                    <div className="edv">
                                        <div>ƏDV</div>
                                        <div>0.00AZN</div>
                                    </div>
                                    <div className="total">
                                        <div>Total: </div>
                                        <div>8.40</div>
                                    </div>
                                    <button className="book-btn">Sifarişi nəğd tamamla</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
