import axios from 'axios'

import {
    CREATE_CAR_POST_REQUEST_URL,
    GET_ALL_CAR_BRANDS_REQUEST_URL,
    GET_FILTERED_CARS_REQUEST_URL,
} from 'consts'

import { Car } from 'models/Car'
import FilteredOptions from '../shared/interfaces/FilteredOptions'

export const getAllCarBrands = () => {
    return axios.get(`${GET_ALL_CAR_BRANDS_REQUEST_URL}`, {})
}

export const createNewCar = (car: Car) => {
    return axios.post(`${CREATE_CAR_POST_REQUEST_URL}`, { ...car })
}

export const getFilteredCars = (params: FilteredOptions) => {
    return axios.get(`${GET_FILTERED_CARS_REQUEST_URL}`, { params })
}
