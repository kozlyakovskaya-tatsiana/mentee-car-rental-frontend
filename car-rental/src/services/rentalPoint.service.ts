import axios, { Axios, AxiosResponse } from 'axios'
import {
    CREATE_RENTAL_POINT_POST_REQUEST_URL,
    DELETE_RENTAL_POINT_REQUEST_URL,
    GET_ALL_RENTAL_POINTS_REQUEST_URL,
    GET_RENTAL_POINT_REQUEST_URL,
    GET_RENTAL_POINTS_BY_CITY_REQUEST_URL,
} from 'consts'
import { Address } from 'shared/types/RentalPoint'
import { City } from '../shared/types/Locations'
import axiosInstance from './axios.service'

interface CreateRentalPointLocation {
    country: string
    city: string
    address: string
    latitude: number
    longitude: number
}

interface CreateRentalPointData {
    name: string
    location: CreateRentalPointLocation
}

export const getRentalPoints = () => {
    return axiosInstance.get(`${GET_ALL_RENTAL_POINTS_REQUEST_URL}`, {})
}

export const getRentalPointsByCity = (data: City) => {
    return axiosInstance.get(
        `${GET_RENTAL_POINTS_BY_CITY_REQUEST_URL}/${data.id}`,
        {}
    )
}

export const createRentalPoint = (
    requestAddress: Address,
    coordinates: { lat: number; lng: number }
) => {
    const requestData: CreateRentalPointData = {
        name: requestAddress.name,
        location: {
            country: requestAddress.country,
            city: requestAddress.city,
            address: requestAddress.address,
            latitude: coordinates.lat,
            longitude: coordinates.lng,
        },
    }
    console.log(requestData)
    return axiosInstance.post(`${CREATE_RENTAL_POINT_POST_REQUEST_URL}`, {
        ...requestData,
    })
}

export const getRentalPointById = (id: string) => {
    return axiosInstance.get(`${GET_RENTAL_POINT_REQUEST_URL}/${id}`, {})
}

export const deleteRentalPoint = (id: string) => {
    return axiosInstance.delete(`${DELETE_RENTAL_POINT_REQUEST_URL}/${id}`, {})
}
