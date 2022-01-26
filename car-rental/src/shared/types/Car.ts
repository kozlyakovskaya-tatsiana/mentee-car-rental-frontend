export interface brandType {
    name: string
    id: string
}

export interface carPhotosType {}

export interface rentalPointType {
    location: string
    id: string
}

export const TransmissionType: { [name: number]: string } = {
    0: 'Auto',
    1: 'Mechanic',
}

export const FuelType: { [name: number]: string } = {
    0: 'Diesel',
    1: 'Bio',
}

export interface carType {
    brand: brandType
    model: string
    fuel: number
    fuelConsumption: number
    transmission: number
    quantityOfSeats: number
    pricePerHour: number
    Photos: Array<carPhotosType>
    rentalPoint: rentalPointType
}
