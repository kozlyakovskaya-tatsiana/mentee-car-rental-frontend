import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contextes/authContext'

interface SProps {
    component: React.ComponentType
    // path?: string
    // roles: Array<ROLE>
}

export const PrivateRoute: React.FC<SProps> = ({
    component: RouteComponent,
    // roles,
}) => {
    const { isUserAuthenticate } = useAuth()
    const isAuthenticated = isUserAuthenticate()
    // const userHasRequiredRole = user && roles.includes(user.role) ? true : false

    if (isAuthenticated === true) {
        return <RouteComponent />
    }

    if (isAuthenticated /* && !userHasRequiredRole */) {
        // return <AccessDenied />
    }

    return <Navigate to="/login" />
}

export default PrivateRoute
