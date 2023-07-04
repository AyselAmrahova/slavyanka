import React from 'react'
import "./_staticSectStyle.scss"
import { Link } from 'react-router-dom';
import { getAllContact } from '../../../api/Contact';
import { useState, useEffect } from "react";

export default function StaticSection() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        getAllContact().then((res) => {
            setContacts(res);
        });
    }, []);

    return (
        <>
            {/* STATIC SECTION */}
            <div className='staticSect'>
                <div className='staticSect-row'>
                    <div className='staticSect-col-6'>
                        <h3>Evdə, ofisdə, həyatın hər anında!</h3>
                        <p>Slavyanka sifariş edin, biz cəmi 24 saat ərzində ünvanınıza çatdırırıq</p>
                        <div className='staticSect-call'>
                            {contacts && contacts.map((contact) => {
                                return (
                                    <div key={contact._id} className='staticSect-call-icon'>
                                        <a href="tel:+994997897877">
                                            <img src="https://slavyanka.az/static/media/PhoneLight.b5e0dced.svg" alt="phonefoto" />
                                        </a>
                                        <p>*{contact.connect}</p>
                                    </div>
                                )
                            })}
                            <div className='staticSect-products'>
                                <div className='staticSect-pro'>
                                    <Link
                                        style={{ display: 'flex', alignItems: 'center', color: '#f8f9fa' }}
                                        to='/products'>
                                        Məhsullar
                                        <img height={12} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgBzZFBDQAhDATbU3ASkIBUJOAECQ0KsICDsgS+LQkvJtnXTtrHEgFVjUhBfrJAKboQU0QRkPaI+JFPZebuXcmnNxfClsQVtjRnSVY/AKupn2s32eZUAAAAAElFTkSuQmCC" alt="fotod" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='staticSect-col-6-img'>
                        <img height="600px" src="https://slavyanka.az/static/media/Hand.d194eb4c.png" alt="fotohtn" />
                    </div>
                </div>
            </div>
        </>
    )
}
