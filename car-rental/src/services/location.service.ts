import axios from 'axios'

import { Country } from 'shared/types/Locations'

import {
    GET_ALL_CITIES_REQUEST_URL,
    GET_ALL_COUNTRIES_REQUEST_URL,
} from '../consts'

export const getCountries = () => {
    return axios.get(`${GET_ALL_COUNTRIES_REQUEST_URL}`, {})
}

export const getCities = (country: Country) => {
    return axios.get(`${GET_ALL_CITIES_REQUEST_URL}/${country.id}`, {})
}
