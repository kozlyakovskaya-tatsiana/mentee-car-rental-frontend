import axios from 'axios'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { LOGIN_REQUEST_URL, REGISTER_REQUEST_URL } from 'consts'

interface CarRentalJwtPayload {
    id?: string
    email?: string
    iss?: string
    sub?: string
    aud?: string[] | string
    exp?: number
    nbf?: number
    iat?: number
    jti?: string
    roles?: string
}

// Make request for register new user into system
export const register = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
) => {
    return axios
        .post(`${REGISTER_REQUEST_URL}`, {
            firstName,
            lastName,
            email,
            password,
        })
        .then((response) => {
            return response
        })
}

// Try to log in into system with email and password
// Return token pair {accessToken, refreshToken} and sets them into local storage
export const login = (email: string, password: string) => {
    return axios
        .post(`${LOGIN_REQUEST_URL}`, {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken)
                localStorage.setItem('refreshToken', response.data.refreshToken)
                const decoded = jwtDecode<CarRentalJwtPayload>(
                    response.data.accessToken
                )
                localStorage.setItem('email', <string>decoded.email)
                localStorage.setItem('roles', <string>decoded.roles)
            }

            return response.data
        })
}

// Clear local storage and make user unauthorized
export const logout = () => {
    localStorage.clear()
}
