import React, { useEffect, useState } from 'react'
import './basket.scss'
import Navbar from './../../../components/Main/NavbarOther/Navbar';
import { Link } from 'react-router-dom';


export default function Basket() {
    const [isClick, setIsClick] = useState(false);
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        JSON.parse(localStorage.getItem("basket")) && setData(JSON.parse(localStorage.getItem("basket")))
    }, [isClick])

    useEffect(() => {
        setTotalPrice(data.reduce((acc, x) => acc + (Number(x.price) * Number(x.basketCount)), 0));
        console.log(data);
        setLoading(false);
    }, [data]);

    const decrementHandler = (e) => {
        const basketItem = data.find(x => x._id === e.target.id);
        if (basketItem) {
            basketItem.basketCount !== 0 && --basketItem.basketCount;
            if (basketItem.basketCount === 0) {
                localStorage.setItem("basket", JSON.stringify(JSON.parse(localStorage.getItem("basket")).filter(x => x._id !== basketItem._id)))
            }
            else {
                localStorage.setItem("basket", JSON.stringify(data))
            }
            setIsClick(true);
            setData(JSON.parse(localStorage.getItem("basket")));
        }
    }

    const incrementHandler = (e) => {
        const basketItem = data.find(x => x._id === e.target.id);
        if (basketItem) {
            basketItem.basketCount++;
            setIsClick(true);
            localStorage.setItem("basket", JSON.stringify(data))
            setData(JSON.parse(localStorage.getItem("basket")));
        }
    }

    const deleteHandler = (e) => {
        const basketItem = data.find(x => x._id === e.target.id);
        if (basketItem) {
            setIsClick(true);
            localStorage.setItem("basket", JSON.stringify(JSON.parse(localStorage.getItem("basket")).filter(x => x._id !== basketItem._id)))
            setData(JSON.parse(localStorage.getItem("basket")));
        }
    }

    return (
        <>
            <Navbar data={data} />
            <main className='basket-page'>
                <div className='basket-content'>
                    <h1>Səbət</h1>
                    <div className='basket-items-list'>
                        {loading ?
                            <div style={{ textAlign: "center" }} >
                                <span className="loader"></span>
                            </div>
                            :
                            <div className='basket'>
                                {data?.map(x => {
                                    return <div key={x._id} className='basket-products'>
                                        <div className='basket-product'>
                                            <div className="basket-product-img">
                                                <Link to={`http://localhost:3000/products/${x._id}`}>
                                                    <img width="80px" alt="productImg" src={x.imageURL} />
                                                </Link>
                                            </div>
                                            <div className="basket-product-details">
                                                <div className='product-name'></div>
                                                <div className='product-count'>
                                                    <span className="solorized">Say: </span> <span>{x.count * x.basketCount}</span>
                                                </div>
                                                <div className="product-total-amount">
                                                    <span className="solorized">Ümumi məbləğ:</span> <span>{(x.price * x.basketCount).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='buttons'>
                                            <div className='pmcounter'>
                                                <div className='eMS'>
                                                    <div className="counter el-center" id={x._id} onClick={decrementHandler}>-</div>
                                                    <div className="counter-num">{x.basketCount}</div>
                                                    <div className="counter el-center" id={x._id} onClick={incrementHandler}>+</div>
                                                </div>
                                            </div>
                                            <div className="delete-from-basket">
                                                <div className="icon">
                                                    <img src="https://slavyanka.az/static/media/TrashBox.96f72515.svg" alt="delete-icon" />
                                                </div>
                                                <span className="cpointer" onClick={deleteHandler} id={x._id}>Səbətdən sil</span>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        }

                    </div>
                </div>
                <div id="basketPrice">
                    <div className="basket-amount">
                        <h1>Yekun</h1>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="total-div">
                                <div className="col-12">
                                    <div className="subtotal">
                                        <div>Subtotal</div>
                                        <div>{(totalPrice).toFixed(2)}</div>
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
                                        <div>{(totalPrice).toFixed(2)}</div>
                                    </div>
                                    <button onClick={async (e) => {
                                        localStorage.removeItem('basket');
                                        window.location.reload(true)
                                        // await setData(null);
                                    }} className="book-btn">Sifarişi nəğd tamamla</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
