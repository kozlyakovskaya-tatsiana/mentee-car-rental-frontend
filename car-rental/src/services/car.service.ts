import axios from 'axios'

import {
    BOOK_CAR_REQUEST,
    CREATE_CAR_POST_REQUEST_URL,
    GET_ALL_CAR_BRANDS_REQUEST_URL,
    GET_FILTERED_CARS_REQUEST_URL,
    LOCK_CAR_REQUEST,
    UNLOCK_CAR_REQUEST,
} from 'consts'

import { Car } from 'models/Car'
import BookCarRequestModel from 'shared/interfaces/BookCarRequestModel'
import FilterOptions from 'shared/interfaces/FilterOptions'

export const getAllCarBrands = () => {
    return axios.get(`${GET_ALL_CAR_BRANDS_REQUEST_URL}`, {})
}

export const createNewCar = (car: Car) => {
    return axios.post(`${CREATE_CAR_POST_REQUEST_URL}`, { ...car })
}

export const getFilteredCars = (params: FilterOptions) => {
    return axios.get(`${GET_FILTERED_CARS_REQUEST_URL}`, { params })
}

export const lockCar = (carId: string) => {
    return axios.patch(`${LOCK_CAR_REQUEST}`, { id: carId })
}

export const unlockCar = (carId: string) => {
    return axios.patch(`${UNLOCK_CAR_REQUEST}`, { id: carId })
}

export const BookCar = (model: BookCarRequestModel) => {
    return axios.post(`${BOOK_CAR_REQUEST}`, { ...model })
}
