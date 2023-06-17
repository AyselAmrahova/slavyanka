import React from 'react'
import StaticSection from '../../../components/Main/StaticSect/StaticSection'
import ThreeCards from '../../../components/Main/ThreeCards/ThreeCards'
import Navbar from '../../../components/Main/HomeNavbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Sliders */}
      <ThreeCards />
      {/* En son elave olunan su */}
      <StaticSection />
      {/* Products/slider */}
    </>
  )
}
