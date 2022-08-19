import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const LoginGuard = () => {
    const auth = localStorage.getItem('auth');

    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default LoginGuard