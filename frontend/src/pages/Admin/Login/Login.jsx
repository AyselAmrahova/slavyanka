import React, { useState } from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp'
import Dashboard from '../Dashboard';

export default function Login() {
    const [currentUser, setCurrentUser] = useState()
    const [signIn, setSignIn] = useState(true)
    return (
        <>
            <div>
                {
                    currentUser ? (
                        <Dashboard />
                    ) : (
                        signIn ? (
                            <SignIn setCurrentUser={setCurrentUser} setSignIn={setSignIn} />
                        )
                            : (
                                <SignUp setCurrentUser={setCurrentUser} setSignIn={setSignIn} />
                            )
                    )
                }
            </div>
        </>
    )
}
