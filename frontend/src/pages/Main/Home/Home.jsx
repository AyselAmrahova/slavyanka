import React from 'react'
import StaticSection from '../../../components/Main/StaticSect/StaticSection'
import ThreeCards from '../../../components/Main/ThreeCards/ThreeCards'
import Navbar from '../../../components/Main/HomeNavbar/Navbar';
import Slider from '../../../components/Main/Slider/Slider';

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <ThreeCards />
      {/* En son elave olunan su */}
      <StaticSection />
      {/* Products/slider */}
    </>
  )
}
