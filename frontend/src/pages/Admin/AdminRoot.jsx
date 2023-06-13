import React from 'react'
import Navbar from '../../components/Admin/Navbar/Navbar'
import Footer from '../../components/Admin/Footer/Footer'
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