import React from 'react'
import Footer from '../../components/Main/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}