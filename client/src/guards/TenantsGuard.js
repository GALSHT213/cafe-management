import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";


const TenantsGuard = () => {
    const { roles } = useContext(AuthContext);

    return (
        roles.includes('app-owner') ? <Outlet/> : <Navigate to="/"/>
    )
}

export default TenantsGuard