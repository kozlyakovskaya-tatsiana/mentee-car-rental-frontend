import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../Consts'

export const refreshTokenPair = () => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    return axios
        .post(`${API_URL}/auth/token/refresh`, {
            accessToken,
            refreshToken,
        })
        .then((response: AxiosResponse<any>) => {
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.status)
                console.log(error.response.data)
            }
        })
}

export const verifyAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken')
    return axios
        .post(`${API_URL}/auth/token/verify`, {
            accessToken,
        })
        .then((response: AxiosResponse<any>) => {
            return true
        })
        .catch((error) => {
            if (error.response) {
                refreshTokenPair()
                console.log(error.response.status)
                console.log(error.response.data)
            }
        })
}
