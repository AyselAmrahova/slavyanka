import React from 'react'
import './basket.scss'
import Navbar from './../../../components/Main/NavbarOther/Navbar';

export default function Basket() {

    return (
        <>
            <Navbar />
            <main className='basket-page'>
                <div className='basket-content'>
                    <h1>Səbət</h1>
                    <div className='basket-items-list'>
                        <div className='basket'>
                            <div className='basket-products'>
                                <div className='basket-product'>
                                    <div className="basket-product-img">
                                        <img width="80px" alt="productImg" src="https://cdn.slavyanka.az/uploads/56712f15-0d6c-4326-9716-d70ae2b8d371.png" />
                                    </div>
                                    <div className="basket-product-details">
                                        <div className='product-name'></div>
                                        <div className='product-count'>
                                            <span className="solorized">Say: </span> 1
                                        </div>
                                        <div className="product-total-amount">
                                            <span class="solorized">Ümumi məbləğ:</span> 8.40
                                        </div>
                                    </div>
                                </div>
                                <div className='buttons'>
                                    <div className='pmcounter'>
                                        <div className='eMS'>
                                            <div className="counter el-center">-</div>
                                            <div className="counter-num">1</div>
                                            <div className="counter el-center">+</div>
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
