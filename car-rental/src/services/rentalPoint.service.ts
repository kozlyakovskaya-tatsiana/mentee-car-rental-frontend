import axios from 'axios'
import {
    CREATE_RENTAL_POINT_POST_REQUEST_URL,
    GET_ALL_RENTAL_POINTS_REQUEST_URL,
} from 'consts'
import { Address } from 'shared/types/RentalPoint'
import { Coordinate } from '../shared/types/Locations'

export const getRentalPoints = () => {
    return axios.get(`${GET_ALL_RENTAL_POINTS_REQUEST_URL}`, {})
}

export const AddRentalPoint = (
    requestAddress: Address,
    coordinates: Coordinate
) => {
    const requestData = {
        name: requestAddress.name,
        location: {
            country: requestAddress.country,
            city: requestAddress.city,
            address: requestAddress.address,
            latitude: Number(coordinates.lat),
            longitude: Number(coordinates.lng),
        },
    }
    return axios
        .post(`${CREATE_RENTAL_POINT_POST_REQUEST_URL}`, { requestData })
        .then((response) => {
            console.log('rp response', response)
        })
}
