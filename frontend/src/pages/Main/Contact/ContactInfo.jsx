import React from 'react'
import './_contactStyle.scss'
import StaticSection from '../../../components/Main/StaticSect/StaticSection';

export default function ContactInfo() {
    return (
        <>
            <section>
                <div>
                    <span>Bizimlə əlaqə</span>
                    <div className='static-sect-contact'>
                        <StaticSection />
                    </div>
                    <div className='contact-section'>
                        <div className='contact-info'>
                            <div className='contact-address'>
                                <div className='info-img'>
                                    <img src="https://slavyanka.az/static/media/Location.a118b987.svg" alt="Location" />
                                </div>
                                <div className='info-text'>
                                    <label className="text-center">Ünvan</label>
                                    <div>Bakı şəhəri, N.Nərimanov rayonu Ziya Bünyadov prospekti 20/61</div>
                                </div>
                            </div>
                            <div className='contact-address'>
                                <div className='info-img'>
                                    <img src="https://slavyanka.az/static/media/PhoneCircle.5cf6064b.svg" alt="Phone" />
                                </div>
                                <div className="info-text">
                                    <label className="text-center">Telefon</label>
                                    <div>+994 12 567 79 66  /  +994 55 515 21 21</div>
                                </div>
                            </div>
                            <div className='contact-address'>
                                <div className='info-img'>
                                    <img src="https://slavyanka.az/static/media/Letter.f569f7c1.svg" alt="E-mail" />
                                </div>
                                <div className="info-text">
                                    <label className="text-center">E-mail</label>
                                    <div>info@slavyanka.az</div>
                                </div>
                            </div>
                        </div>
                        <div className='contact-map'>
                            <iframe
                                title="Location"
                                src="https://maps.google.com/maps?q=Bakı şəhəri, N.Nərimanov rayonu Ziya Bünyadov prospekti 20/61&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
