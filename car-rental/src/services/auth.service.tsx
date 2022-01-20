import React from 'react'
import axios from 'axios'
import { API_URL } from 'Consts'
import { verifyAccessToken } from './tokens.service'
import { registerValues } from '../shared/types/Auth'

class AuthService {
    // Make request for register new user into system
    // Nothing to return
    public register = (data: registerValues) => {
        return axios
            .post(`${API_URL}/auth/register`, {
                ...data,
            })
            .then((response) => {
                return true
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
