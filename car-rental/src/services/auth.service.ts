import axios from 'axios'
import { LOGIN_REQUEST, REGISTER_REQUEST } from 'consts'

// Make request for register new user into system
export const register = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
) => {
    return axios
        .post(`${REGISTER_REQUEST}`, {
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
        .post(`${LOGIN_REQUEST}`, {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken)
                localStorage.setItem('refreshToken', response.data.refreshToken)
            }

            return response.data
        })
}

// Clear local storage and make user unauthorized
export const logout = () => {
    localStorage.clear()
}
