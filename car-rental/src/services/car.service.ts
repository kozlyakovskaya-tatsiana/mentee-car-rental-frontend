import axios from 'axios'

import { GET_ALL_CAR_BRANDS_REQUEST_URL } from 'consts'

export const getAllCarBrands = () => {
    return axios.get(`${GET_ALL_CAR_BRANDS_REQUEST_URL}`, {})
}

export const sad = ''
