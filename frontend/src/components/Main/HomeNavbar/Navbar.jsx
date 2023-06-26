import React from 'react'
import './_navbarStyle.scss'
import { Button } from '@mui/material';
import { useUserContext } from "../../../pages/Main/Login/context/UserContext";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
    const [user, setUser] = useUserContext();
    const navigate = useNavigate();
    console.log(user);
    return (
        <>
            {/* bu divdə slider də olmalıdı */}
            <div className='navbarSlider'>
                <nav>
                    <div className='navborder'>
                        <div className="navLogo">
                            <Link to='http://localhost:3000/' style={{ color: '#0d6efd', backgroundColor: 'transparent' }}><img src="https://slavyanka.az/static/media/LogoLight.50bd6f96.svg" alt="Example" height={'72px'} /></Link>
                        </div>
                        <div className='navNum'>
                            <p> Sifariş üçün : </p>
                            <h6>*2121</h6>
                        </div>
                        <ul className='navUl'>
                            <li><h5><Link to='http://localhost:3000/' className='navLink'>Ana səhifə</Link></h5></li>
                            <li><h5><Link to='/products' className='navLink'>Məhsullar</Link></h5></li>
                            <li><h5><Link to='/about' className='navLink'>Haqqımızda</Link></h5></li>
                            <li><h5><Link to='/contact' className='navLink'>Əlaqə</Link></h5></li>
                        </ul>
                        <div className='navIcon'>
                            {/* <div className='navLang'>
                                <Dropdown
                                    className='navDropDown'
                                    menu={{
                                        items,
                                        selectable: true,
                                        defaultSelectedKeys: ['1'],
                                    }}
                                >
                                    <Typography.Link>
                                        <Space style={{ color: '#f8f9fa ', fontWeight: '700', fontSize: "16px" }}>
                                            AZE
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </div> */}

                            {user ? (
                                <>
                                    <Button color="inherit">
                                        <p>{user.name}</p>
                                    </Button>
                                    <Button onClick={async () => {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('user');
                                        await setUser(null);
                                        navigate('/login');
                                    }} color="inherit">
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <div className='navUser'>
                                        <div className='navUserIcon'>
                                            <Link to='http://localhost:3000/login'>
                                                <img src="https://slavyanka.az/static/media/PersonLight.8bad44e1.svg" alt="Example" width="18" height="18" />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className='navBasket'>
                                <div className='navBasketIcon'>
                                    <img src="https://slavyanka.az/static/media/ShoppingLight.8e403ab1.svg" alt="Example" />
                                </div>
                            </div>
                            <div className='navHamburger'>
                                <img src="https://slavyanka.az/static/media/togglewhite.61779455.svg" alt="Example" />
                            </div>

                        </div>
                        <div className='navCall'>
                            <img src="https://slavyanka.az/static/media/PhoneLight.b5e0dced.svg" alt="Example" />
                            <a href="tel:+994997897877">Zəng sifarişi</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
