import axios, { AxiosResponse } from 'axios'
import { TOKEN_REFRESH_REQUEST_URL, TOKEN_VERIFY_REQUEST_URL } from '../consts'

export const refreshTokenPair = () => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    return axios
        .post(`${TOKEN_REFRESH_REQUEST_URL}`, {
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
        .post(`${TOKEN_VERIFY_REQUEST_URL}`, {
            accessToken,
        })
        .then((response: AxiosResponse<any>) => {
            return response.data
        })
        .catch((error) => {
            if (error.response) {
                refreshTokenPair()
                console.log(error.response.status)
                console.log(error.response.data)
            }
        })
}
