import React from 'react'
import axios from 'axios'
import { API_URL } from 'Consts'
import { verifyAccessToken } from './tokens.service'

class AuthService {
    // Make request for register new user into system
    // Nothing to return
    public register = (
        firstname: string,
        lastname: string,
        email: string,
        password: string
    ) => {
        return axios
            .post(`${API_URL}/auth/register`, {
                firstname,
                lastname,
                email,
                password,
            })
            .then((response) => {
                return this.login(email, password)
            })
            .catch((error) => {
                console.log(error.data)
            })
    }

    // Try to log in into system with email and password
    // Return token pair {accessToken, refreshToken} and sets them into local storage
    public login = (email: string, password: string) => {
        return axios
            .post(`${API_URL}/auth/login`, {
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
            .catch((error) => {
                console.log(error.data)
            })
    }

    // Clear local storage and make user unauthorized
    public logout = () => {
        localStorage.clear()
    }

    public verifyAuth = () => {
        return verifyAccessToken()
    }
}

export default new AuthService()
