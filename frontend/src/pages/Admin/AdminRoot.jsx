import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login/Login';
import Navbar from './../../components/Admin/Navbar/Navbar';
import { useUserContext } from '../Main/context/UserContext';

export default function Root() {

    const [user] = useUserContext()

    return (
        <>
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