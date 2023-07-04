import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from '../../../components/Main/NavbarOther/Navbar'
import AboutSection from './AboutSection';
import './style.scss'
import Cards from './../../../components/Main/Cards/Cards';

export default function About() {

  return (
    <>
      <Helmet>
        <title>Slavyanka || About</title>
      </Helmet>
      <Navbar />
      <AboutSection />
      <Cards />
    </>
  )
}
