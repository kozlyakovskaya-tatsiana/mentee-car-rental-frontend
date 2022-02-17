import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'contextes/authContext'
import AccessDenied from 'components/AccessDenied'

interface SProps {
    component: React.ComponentType
    // path?: string
    roles?: string[]
}

export const PrivateRoute: React.FC<SProps> = ({
    component: RouteComponent,
    roles,
}) => {
    const { isUserAuthenticate } = useAuth()
    const isAuthenticated = isUserAuthenticate()
    const userRole = localStorage.getItem('roles')?.toString() || null
    const userHasRequiredRole = userRole
        ? isAuthenticated && roles?.includes(userRole)
        : false
    if (isAuthenticated && roles && userHasRequiredRole) {
        return <RouteComponent />
    }

    if (isAuthenticated && !userHasRequiredRole) {
        return <AccessDenied />
    }

    return <Navigate to="/login" />
}

PrivateRoute.defaultProps = {
    roles: undefined,
}

export default PrivateRoute
