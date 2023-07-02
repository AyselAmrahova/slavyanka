import React from 'react'
import './_navbarStyle.scss'
import { Button, Badge } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { getAllContact } from '../../../api/Contact';
import { useState, useEffect } from "react";

// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // const [user, setUser] = useUserContext();
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'));
        }
    }, [])

    const navigate = useNavigate();

    const [contacts, setContacts] = useState([])
    useEffect(() => {
        getAllContact().then((res) => {
            setContacts(res);
        });
    }, []);
    return (
        <>
            <div className='navbarSlider'>
                <nav>
                    <div className='navborder'>
                        <div className="navLogo">
                            <Link to='http://localhost:3000/' style={{ color: '#0d6efd', backgroundColor: 'transparent' }}><img src="https://slavyanka.az/static/media/LogoLight.50bd6f96.svg" alt="Example" height={'72px'} /></Link>
                        </div>
                        {contacts && contacts.map((contact) => {
                            return (
                                <div key={contact._id} className='navNum'>
                                    <p> Sifariş üçün : </p>
                                    <h6>*{contact.connect}</h6>
                                </div>
                            )
                        })}
                        <ul className='navUl'>
                            <li><h5><Link to='http://localhost:3000/' className='navLink'>Ana səhifə</Link></h5></li>
                            <li><h5><Link to='/products' className='navLink'>Məhsullar</Link></h5></li>
                            <li><h5><Link to='/about' className='navLink'>Haqqımızda</Link></h5></li>
                            <li><h5><Link to='/contact' className='navLink'>Əlaqə</Link></h5></li>
                        </ul>
                        <div className='navIcon'>
                            {user ? (
                                <>
                                    <Button style={{ border: '1px solid #cedef3', marginRight: '10px' }} color="inherit">
                                        <Link to=''><p style={{ color: '#fff' }}>{JSON.parse(user).name}</p></Link>
                                    </Button>
                                    <Button onClick={async () => {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('user');
                                        await setUser(null);
                                        navigate('/login');
                                    }} style={{ border: '1px solid #cedef3', padding: '0.4rem 0rem', marginRight: '10px' }} color="inherit">
                                        <FiLogOut style={{ fontSize: '23px' }} />
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
                                    <Link to='http://localhost:3000/basket'>
                                        <Badge badgeContent={JSON.parse(localStorage.getItem("basket"))?.length} color="primary">
                                            <img src="https://slavyanka.az/static/media/ShoppingLight.8e403ab1.svg" alt="Example" />
                                        </Badge>
                                    </Link>
                                </div>
                            </div>
                            <div className='navHamburger' style={{ padding: "14px 0" }}>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <img src="https://slavyanka.az/static/media/togglewhite.61779455.svg" alt="Example" />
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <Link to='http://localhost:3000'><MenuItem onClick={handleClose} style={{ color: "#212529" }}>Ana səhifə</MenuItem></Link>
                                    <Link to='http://localhost:3000/products'><MenuItem onClick={handleClose} style={{ color: "#212529" }}>Məhsullar</MenuItem></Link>
                                    <Link to='http://localhost:3000/about'><MenuItem onClick={handleClose} style={{ color: "#212529" }}>Haqqımızda</MenuItem></Link>
                                    <Link to='http://localhost:3000/contact'><MenuItem onClick={handleClose} style={{ color: "#212529" }}>Əlaqə</MenuItem></Link>
                                </Menu>
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
