import React from 'react'
import './_contactStyle.scss'
import StaticSection from '../../../components/Main/StaticSect/StaticSection';
import { useState, useEffect } from "react";
import { getAllContact } from '../../../api/Contact';

export default function ContactInfo() {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        getAllContact().then((res) => {
            setContacts(res);
            setLoading(false)
        });
    }, []);

    return (
        <>
            <section>
                <div>
                    <span>Bizimlə əlaqə</span>
                    <div className='static-sect-contact'>
                        <StaticSection />
                    </div>
                    <div className='contact-section'>
                        {contacts && contacts.map((contact) => {
                            return (
                                <>
                                    <div key={contact._id} className='contact-info'>
                                        <div className='contact-address'>
                                            <div className='info-img'>
                                                <img src="https://slavyanka.az/static/media/Location.a118b987.svg" alt="Location" />
                                            </div>
                                            <div className='info-text'>
                                                <label className="text-center">Ünvan</label>
                                                <div>{contact.address}</div>
                                            </div>
                                        </div>
                                        <div className='contact-address'>
                                            <div className='info-img'>
                                                <img src="https://slavyanka.az/static/media/PhoneCircle.5cf6064b.svg" alt="Phone" />
                                            </div>
                                            <div className="info-text">
                                                <label className="text-center">Telefon</label>
                                                <div>{contact.phone}</div>
                                            </div>
                                        </div>
                                        <div className='contact-address'>
                                            <div className='info-img'>
                                                <img src="https://slavyanka.az/static/media/Letter.f569f7c1.svg" alt="E-mail" />
                                            </div>
                                            <div className="info-text">
                                                <label className="text-center">E-mail</label>
                                                <div>{contact.email}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {loading ? <div style={{ textAlign: "center" }} ><span class="loader"></span></div> : (
                                        <div className='contact-map'>
                                            <iframe
                                                title="Location"
                                                src={`https://maps.google.com/maps?q=${contact.address}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                                width="600"
                                                height="450"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"></iframe>
                                        </div>
                                    )}
                                </>
                            )
                        })}
                    </div>
                </div>
            </section >
        </>
    )
}
