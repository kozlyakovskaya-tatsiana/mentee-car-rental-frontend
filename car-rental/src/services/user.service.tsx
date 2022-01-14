import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/'

export const getPublicContent = () => {
    return axios.get(`${API_URL}management/users`)
}

export const getUserBoard = () => {
    return axios.get(`${API_URL}secured/auth`)
}

export const getAdminBoard = () => {
    return axios.get(`${API_URL}secured/Superadmin`)
}
