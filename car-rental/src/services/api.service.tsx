import axios from 'axios'
import { verifyAccessToken } from './tokens.service'

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            if (config.headers) {
                config.headers['Authorization'] = 'Bearer ' + token
            }
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (response) => {
        return response
    },
    function (error) {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            return verifyAccessToken()
        }
        return Promise.reject(error)
    }
)
