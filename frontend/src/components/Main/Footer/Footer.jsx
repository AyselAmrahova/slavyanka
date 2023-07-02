import React, { useEffect, useState } from 'react'
import './_footerStyle.scss'
import { Link } from 'react-router-dom';
import { getAllContact } from '../../../api/Contact';
export default function Footer() {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    getAllContact().then((res) => {
      setContacts(res);
    });
  }, []);
  return (
    <>
      <footer>
        <div className='footer'>
          <div className='footer-logo'>
            <img src="https://slavyanka.az/static/media/LogoDark.9ce611ae.svg" alt="" />
          </div>
        </div>
        <div className='footer-div'>
          <ul className='footer-div-ul'>
            <li className='footer-div-ul-li-1'>slavyanka.az</li>
            {contacts && contacts.map((contact) => {
              return (
                <li key={contact._id} className='footer-div-ul-li-2'>
                  <img src="https://slavyanka.az/static/media/PhoneDark.7f003459.svg" alt="phone-icon" />
                  <span>Sifariş üçün </span>
                  <b className="contactNum"> *2121</b>
                </li>
              )
            })}
            <li>info@slavyanka.az</li>
          </ul>
        </div>
        <div className='footer-title-div'>
          <ul className='footer-title-div-ul'>
            <li>
              <Link style={{ color: "#212529", fontWeight: '700' }} to='/'>© "Gədəbəy Mineral Suları" MMC</Link>
            </li>
            <li>
              <Link style={{ color: "#212529" }} to='/'>Ana səhifə</Link>
            </li>
            <li>
              <Link style={{ color: "#212529" }} to='/products'>Məhsullar</Link>
            </li>
            <li>
              <Link style={{ color: "#212529" }} to='/about'>Haqqımızda</Link>
            </li>
            <li>
              <Link style={{ color: "#212529" }} to='/contact'>Əlaqə</Link>
            </li>
          </ul>
        </div>
        <div className='footer-icon'>
          <div style={{ margin: '0.5rem', cursor: 'pointer' }}>
            <a href="https://www.youtube.com/channel/UCLoW-Oks7nWlC863-IYxabw">
              <img height={20} width={20} style={{ verticalAlign: 'middle' }} src="https://slavyanka.az/static/media/YoutubeDark.b3e1a463.svg" alt="youtube" />
            </a>
          </div>
          <div style={{ margin: '0.5rem', cursor: 'pointer' }}>
            <a href="https://twitter.com/Slavyanka_az">
              <img height={20} width={20} style={{ verticalAlign: 'middle' }} src="https://slavyanka.az/static/media/TwitterDark.6bde859c.svg" alt="twitter" />
            </a>
          </div>
          <div style={{ margin: '0.5rem', cursor: 'pointer' }}>
            <a href="https://www.instagram.com/slavyanka_az/">
              <img height={20} width={20} style={{ verticalAlign: 'middle' }} src="https://slavyanka.az/static/media/InstagramDark.717567b0.svg" alt="instagram" />
            </a>
          </div>
          <div style={{ margin: '0.5rem', cursor: 'pointer' }}>
            <a href="https://www.facebook.com/Slavyanka.az">
              <img height={20} width={20} style={{ verticalAlign: 'middle' }} src="https://slavyanka.az/static/media/FacebookDark.7ea1f8b3.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </footer >
    </>
  )
}
