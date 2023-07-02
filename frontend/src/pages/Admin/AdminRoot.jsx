import React from 'react'
import Navbar from './../../components/Admin/Navbar/Navbar';
import { Outlet } from 'react-router-dom'
import { useUserContext } from '../Main/context/UserContext';
import Login from '../Admin/Login/Login';

export default function Root() {

    const [user] = useUserContext()

    return (
        <>
            {/* <Navbar />
            <Outlet /> */}
            <>
                {
                    user?.isAdmin ? (
                        <>
                            <Navbar />
                            <Outlet />
                        </>
                    ) : (
                        <Login />
                    )
                }
            </>
        </>
    )
}