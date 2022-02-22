/* eslint-disable */
import axios from 'axios'
import { refreshTokenPair } from './tokens.service'
import { API_URL } from '../consts'

export const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 3000,
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    function (error) {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            return refreshTokenPair()
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
