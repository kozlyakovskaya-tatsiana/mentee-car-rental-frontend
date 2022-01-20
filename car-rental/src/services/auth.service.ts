import React from 'react'
import axios from 'axios'
import { LOGIN_REQUEST, REGISTER_REQUEST } from 'Consts'
import { verifyAccessToken } from './tokens.service'

class AuthService {
    // Make request for register new user into system
    public register = (
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
    public login = (email: string, password: string) => {
        return axios
            .post(`${LOGIN_REQUEST}`, {
                email,
                password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem(
                        'accessToken',
                        response.data.accessToken
                    )
                    localStorage.setItem(
                        'refreshToken',
                        response.data.refreshToken
                    )
                }

                return response.data
            })
    }

    // Clear local storage and make user unauthorized
    public logout = () => {
        localStorage.clear()
    }
}

export default new AuthService()
