import React, { useState } from 'react'
import { Helmet } from "react-helmet";

import Navbar from '../../../components/Main/HomeNavbar/Navbar';
import Slider from '../../../components/Main/Slider/Slider';
import Cards from '../../../components/Main/Cards/Cards'
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
      <Cards />
      <LatestProduct onClick={handleClick} />
      <StaticSection />
      <SliderCardProduct onClick={handleClick} />
    </>
  )
}
