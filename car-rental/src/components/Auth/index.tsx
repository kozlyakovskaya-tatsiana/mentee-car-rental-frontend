import React from 'react'

import { useAuth } from 'contextes/authContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthCheck: React.FC = () => {
    const { isAuth } = useAuth()
    const location = useLocation()

    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    )
}

export default AuthCheck
