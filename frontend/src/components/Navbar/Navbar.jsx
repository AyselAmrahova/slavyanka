import React from 'react'
import { Link } from 'react-router-dom'
import './_navbarStyle.scss'

export default function Navbar() {
    return (
        <>
            {/* bu divdə slider də olmalıdı */}
            <div className='navbarSlider'>
                <nav>
                    <div className='navborder'>
                        <div className="navLogo">
                            <Link to='/home' style={{ color: '#0d6efd', backgroundColor: 'transparent' }}><img src="https://slavyanka.az/static/media/LogoLight.50bd6f96.svg" alt="Example" height={'72px'} /></Link>
                        </div>
                        <div className='navNum'>
                            <p> Sifariş üçün </p>
                            <h6>*2121</h6>
                        </div>
                        <ul>
                            <li><h5><Link to='/home' className='navLink'>Ana səhifə</Link></h5></li>
                            <li><h5><Link to='/products' className='navLink'>Məhsullar</Link></h5></li>
                            <li><h5><Link to='/about' className='navLink'>Haqqımızda</Link></h5></li>
                            <li><h5><Link to='/contact' className='navLink'>Əlaqə</Link></h5></li>
                        </ul>
                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div className='navUser' style={{ border: " 1px solid #cedef3", borderRadius: '0.2rem', padding:'0.5rem 1rem'}}>
                                <img src="https://slavyanka.az/static/media/PersonLight.8bad44e1.svg" alt="Example" />
                            </div>
                            <div>
                                <img src="https://slavyanka.az/static/media/ShoppingLight.8e403ab1.svg" alt="Example" />
                            </div>
                        </div>
                        {/* <img src="https://slavyanka.az/static/media/togglewhite.61779455.svg" alt="Example" /> */}
                        <div>
                            <img src="https://slavyanka.az/static/media/PhoneLight.b5e0dced.svg" alt="Example" />
                            <h6> Zəng sifarişi </h6>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
