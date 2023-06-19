import React from 'react'
import './_navbarOther.scss'
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
            <div className='navbarSlider-other'>
                <nav>
                    <div className='navborder'>
                        <div className="navLogo">
                            <Link to='http://localhost:3000' style={{ color: '#0d6efd', backgroundColor: 'transparent' }}><img src="https://slavyanka.az/static/media/LogoDark.9ce611ae.svg" alt="Example" height={'72px'} /></Link>
                        </div>
                        <div className='navNum'>
                            <p> Sifariş üçün </p>
                            <h6>*2121</h6>
                        </div>
                        <ul className='navUl'>
                            <li><h5><Link to='http://localhost:3000' className='navLink'>Ana səhifə</Link></h5></li>
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
                                        <Space style={{ color: '#212529 ', fontSize: "16px", fontWeight: '700' }}>
                                            AZE
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </div>
                            <div className='navUser'>
                                <div className='navUserIcon'>
                                    <img src="https://slavyanka.az/static/media/PersonDark.5c33bb01.svg" alt="Example" width="18" height="18" />
                                </div>
                            </div>
                            <div className='navBasket'>
                                <div className='navBasketIcon'>
                                    <img src="https://slavyanka.az/static/media/ShoppingDark.b6cc94ef.svg" alt="Example" />
                                </div>
                            </div>
                            <div className='navHamburger'>
                                <img src="https://slavyanka.az/static/media/toggleblack.a68a54bc.svg" alt="Example" />
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
