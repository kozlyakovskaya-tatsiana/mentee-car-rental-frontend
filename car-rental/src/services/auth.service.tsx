import axios, { AxiosResponse } from 'axios'
import { API_URL } from 'Consts'
import React, { useState } from 'react'
import { verifyAccessToken } from './tokens.service'
// import { changeErrorMessage } from '../pages/LoginPage/LoginForm'

export const register = (
    firstname: string,
    lastname: string,
    email: string,
    password: string
) => {
    return axios.post(`${API_URL}/auth/register`, {
        firstname,
        lastname,
        email,
        password,
    })
}

export const login = (email: string, password: string) => {
    return axios
        .post(`${API_URL}/auth/login`, {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken)
                localStorage.setItem('refreshToken', response.data.refreshToken)
                verifyAccessToken()
            }

            return response.data
        })
}

export const logout = () => {
    localStorage.removeItem('user')
}
