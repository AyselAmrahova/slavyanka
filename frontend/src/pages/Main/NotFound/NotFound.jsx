import React from 'react'
import './_notFoundStyle.scss'
import Navbar from '../../../components/Main/HomeNavbar/Navbar'
export default function index() {
    return (
        <>
            <Navbar />
            <div className='not-found-div'>Not Found</div>
        </>
    )
}
