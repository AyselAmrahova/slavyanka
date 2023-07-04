import React from 'react'
import './_navbarOther.scss'
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { Button } from '@mui/material';
import { useState, useEffect } from "react";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getAllContact } from '../../../api/Contact';

export default function Navbar(props) {
    const [user, setUser] = useState(null);
    const [contacts, setContacts] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'));
        }
    }, [])

    useEffect(() => {
        getAllContact().then((res) => {
            setContacts(res);
        });
    }, []);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='navbarSlider-other'>
                <nav>
                    <div className='navborder'>
                        <div className="navLogo">
                            <Link to='http://localhost:3000' style={{ color: '#0d6efd', backgroundColor: 'transparent' }}><img src="https://slavyanka.az/static/media/LogoDark.9ce611ae.svg" alt="Example" height={'72px'} /></Link>
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
                            <li><h5><Link to='http://localhost:3000' className='navLink'>Ana səhifə</Link></h5></li>
                            <li><h5><Link to='http://localhost:3000/products' className='navLink'>Məhsullar</Link></h5></li>
                            <li><h5><Link to='http://localhost:3000/about' className='navLink'>Haqqımızda</Link></h5></li>
                            <li><h5><Link to='http://localhost:3000/contact' className='navLink'>Əlaqə</Link></h5></li>
                        </ul>
                        <div className='navIcon'>
                            {user ? (
                                <>
                                    <Button style={{ border: '1px solid #cedef3', marginRight: '10px' }} color="inherit">
                                        <Link to=''><p style={{ color: 'black' }}>{JSON.parse(user).name}</p></Link>
                                    </Button>
                                    <Button onClick={async () => {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('user');
                                        await setUser(null);
                                        navigate('/login');
                                    }} style={{ border: '1px solid #cedef3', padding: '0.4rem 0rem', marginRight: '10px' }} color="inherit">
                                        <FiLogOut style={{ color: 'black', fontSize: '23px' }} />
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <div className='navUser'>
                                        <div className='navUserIcon'>
                                            <Link to='http://localhost:3000/login'>
                                                <img src="https://slavyanka.az/static/media/PersonDark.5c33bb01.svg" alt="Example" width="18" height="18" />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className='navBasket'>
                                <div className='navBasketIcon'>
                                    <Link to='http://localhost:3000/basket'>
                                        {/* <Badge badgeContent={props.data?.length} color="primary"> */}
                                        <Badge badgeContent={JSON.parse(localStorage.getItem("basket"))?.length} color="primary">
                                            <img src="https://slavyanka.az/static/media/ShoppingDark.b6cc94ef.svg" alt="Example" />
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

                                    <img src="https://slavyanka.az/static/media/toggleblack.a68a54bc.svg" alt="Example" />
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
