export interface Location {
    id: string
    cityId: string
    address: string
    latitude: number
    longitude: number
}

export interface RentalPointType {
    id: string
    location: Location
    name: string
}

export interface Address {
    country: string
    city: string
    address: string
    name: string
}
