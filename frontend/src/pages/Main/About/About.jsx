
import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from '../../../components/Main/NavbarOther/Navbar'
import ThreeCards from './../../../components/Main/ThreeCards/ThreeCards';
import AboutSection from './AboutSection';
import './_aboutStyle.scss'

export default function About() {

  return (
    <>
      <Helmet>
        <title>Slavyanka || About</title>
      </Helmet>
      <Navbar />
      <AboutSection />
      <ThreeCards />
    </>
  )
}
