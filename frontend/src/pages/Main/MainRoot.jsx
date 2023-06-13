import React from 'react'
import Navbar from '../../components/Main/Navbar/Navbar'
import Footer from '../../components/Main/Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}