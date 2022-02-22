import {
    BOOK_CAR_REQUEST,
    CREATE_CAR_POST_REQUEST_URL,
    DELETE_CAR_REQUEST_URL,
    GET_ALL_CAR_BRANDS_REQUEST_URL,
    GET_ALL_CARS_REQUEST_URL,
    GET_FILTERED_CARS_REQUEST_URL,
    LOCK_CAR_REQUEST,
    UNLOCK_CAR_REQUEST,
} from 'consts'

import { Car } from 'models/Car'
import BookCarRequestModel from 'shared/interfaces/BookCarRequestModel'
import FilterOptions from 'shared/interfaces/FilterOptions'
import { axiosInstance } from './axios.service'

export const getAllCarBrands = () => {
    return axiosInstance.get(`${GET_ALL_CAR_BRANDS_REQUEST_URL}`, {})
}

export const getAllCars = () => {
    return axiosInstance.get(`${GET_ALL_CARS_REQUEST_URL}`)
}

export const createNewCar = (car: Car) => {
    return axiosInstance.post(`${CREATE_CAR_POST_REQUEST_URL}`, { ...car })
}

export const getFilteredCars = (params: FilterOptions) => {
    return axiosInstance.get(`${GET_FILTERED_CARS_REQUEST_URL}`, { params })
}

export const lockCar = (carId: string) => {
    return axiosInstance.patch(`${LOCK_CAR_REQUEST}`, { id: carId })
}

export const unlockCar = (carId: string) => {
    return axiosInstance.patch(`${UNLOCK_CAR_REQUEST}`, { id: carId })
}

export const BookCar = (model: BookCarRequestModel) => {
    return axiosInstance.post(`${BOOK_CAR_REQUEST}`, { ...model })
}

export const deleteCar = (id: string) => {
    return axiosInstance.delete(`${DELETE_CAR_REQUEST_URL}/${id}`, {})
}
