import React, { useState } from 'react'
import { Helmet } from "react-helmet";

import Navbar from '../../../components/Main/HomeNavbar/Navbar';
import Slider from '../../../components/Main/Slider/Slider';
import ThreeCards from '../../../components/Main/ThreeCards/ThreeCards'
import LatestProduct from '../Products/LatestProduct';
import StaticSection from '../../../components/Main/StaticSect/StaticSection'
import SliderCardProduct from '../Products/SliderCardProduct';

export default function Home() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    setData(JSON.parse(localStorage.getItem("basket")));
  }

  return (
    <>
      <Helmet>
        <title>Slavyanka || Gedebey Water</title>
      </Helmet>
      <Navbar data={data} />
      <Slider />
      <ThreeCards />
      <LatestProduct onClick={handleClick} />
      <StaticSection />
      <SliderCardProduct onClick={handleClick} />
    </>
  )
}
