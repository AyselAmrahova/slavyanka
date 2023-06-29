import React from 'react'
import './_navbarOther.scss'
import { Link, useNavigate } from "react-router-dom";
// import { useUserContext } from "../../../pages/Main/context/UserContext";
import { FiLogOut } from "react-icons/fi";
import { Button } from '@mui/material';
import { getAllContact } from '../../../api/requests';
import { useState, useEffect } from "react";

export default function Navbar() {

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
                            <li><h5><Link to='/products' className='navLink'>Məhsullar</Link></h5></li>
                            <li><h5><Link to='/about' className='navLink'>Haqqımızda</Link></h5></li>
                            <li><h5><Link to='/contact' className='navLink'>Əlaqə</Link></h5></li>
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
