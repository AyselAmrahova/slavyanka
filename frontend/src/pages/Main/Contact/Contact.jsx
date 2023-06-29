import React from 'react'
import Navbar from '../../../components/Main/NavbarOther/Navbar';
import ContactInfo from './ContactInfo';
import Suggestions from './Suggestions.jsx';
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Slavyanka || Contact</title>
      </Helmet>
      <Navbar />
      <ContactInfo />
      <Suggestions />
    </>
  )
}
