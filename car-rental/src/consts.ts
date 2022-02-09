export const API_URL = 'https://localhost:5001/api'
export const API_MANAGEMENT_URL = `${API_URL}/management`

export const REGISTER_REQUEST_URL = `${API_URL}/auth/register`
export const LOGIN_REQUEST_URL = `${API_URL}/auth/login`

export const TOKEN_REFRESH_REQUEST_URL = `${API_URL}/auth/token/refresh`
export const TOKEN_VERIFY_REQUEST_URL = `${API_URL}/auth/token/verify`

export const GET_ALL_COUNTRIES_REQUEST_URL = `${API_URL}/location/country`
export const GET_ALL_CITIES_REQUEST_URL = `${API_URL}/location/city`

export const GET_ALL_RENTAL_POINTS_REQUEST_URL = `${API_URL}/rentalpoint`
export const CREATE_RENTAL_POINT_POST_REQUEST_URL = `${API_URL}/rentalpoint`
export const DELETE_RENTAL_POINT_REQUEST_URL = `${API_URL}/rentalpoint`

export const GET_ALL_CAR_BRANDS_REQUEST_URL = `${API_MANAGEMENT_URL}/cars/brand`
export const CREATE_CAR_POST_REQUEST_URL = `${API_MANAGEMENT_URL}/cars`
