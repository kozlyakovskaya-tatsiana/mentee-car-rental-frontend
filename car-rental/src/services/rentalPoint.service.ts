import axios from 'axios'
import {
    CREATE_RENTAL_POINT_POST_REQUEST_URL,
    DELETE_RENTAL_POINT_REQUEST_URL,
    GET_ALL_RENTAL_POINTS_REQUEST_URL,
} from 'consts'
import { Address } from 'shared/types/RentalPoint'

export const getRentalPoints = () => {
    return axios.get(`${GET_ALL_RENTAL_POINTS_REQUEST_URL}`, {})
}

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
    return axios
        .post(`${CREATE_RENTAL_POINT_POST_REQUEST_URL}`, { ...requestData })
        .then((response) => {
            console.log('rp response', response)
        })
}

export const deleteRentalPoint = (id: string) => {
    return axios.delete(`${DELETE_RENTAL_POINT_REQUEST_URL}/${id}`, {})
}