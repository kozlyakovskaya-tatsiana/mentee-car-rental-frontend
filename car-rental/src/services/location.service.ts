import axios from 'axios'
import Geocode from 'react-geocode'

import { Coordinate, Country } from 'shared/types/Locations'

import {
    GET_ALL_CITIES_REQUEST_URL,
    GET_ALL_COUNTRIES_REQUEST_URL,
} from '../consts'
import axiosInstance from './axios.service'

Geocode.setApiKey('your_geocode_api_key')
Geocode.setLanguage('en')

export const getCountries = () => {
    return axiosInstance.get(`${GET_ALL_COUNTRIES_REQUEST_URL}`, {})
}

export const getCities = (country: Country) => {
    return axiosInstance.get(`${GET_ALL_CITIES_REQUEST_URL}/${country.id}`, {})
}

export const getAddressByCoordinates = (coords: Coordinate) => {
    return Geocode.fromLatLng(coords.lat, coords.lng).then(
        (response) => {
            const address = response.results[0].formatted_address
            return address
        },
        (error) => {
            console.error(error)
        }
    )
}
