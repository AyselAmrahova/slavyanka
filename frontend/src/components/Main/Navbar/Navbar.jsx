import React from 'react'
import './_navbarStyle.scss'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const items = [
        {
            key: '1',
            label: <Link to=''> AZE </Link>,
        },
        {
            key: '2',
            label: <Link to=''> ENG </Link>,
        },
        {
            key: '3',
            label: <Link to=''> RUS </Link>,
        },
    ];
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
                        <ul className='navUl'>
                            <li><h5><Link to='/home' className='navLink'>Ana səhifə</Link></h5></li>
                            <li><h5><Link to='/products' className='navLink'>Məhsullar</Link></h5></li>
                            <li><h5><Link to='/about' className='navLink'>Haqqımızda</Link></h5></li>
                            <li><h5><Link to='/contact' className='navLink'>Əlaqə</Link></h5></li>
                        </ul>
                        <div className='navIcon'>
                            <div className='navLang'>
                                <Dropdown
                                    className='navDropDown'
                                    menu={{
                                        items,
                                        selectable: true,
                                        defaultSelectedKeys: ['1'],
                                    }}
                                >
                                    <Typography.Link>
                                        <Space style={{ color: '#f8f9fa ' }}>
                                            AZE
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </div>
                            <div className='navUser'>
                                <div className='navUserIcon'>
                                    <img src="https://slavyanka.az/static/media/PersonLight.8bad44e1.svg" alt="Example" width="18" height="18" />
                                </div>
                            </div>
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
                            <h6> Zəng sifarişi </h6>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
