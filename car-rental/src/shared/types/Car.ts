export interface Brand {
    name: string
    id: string
}

export interface CarPhotos {}

export interface RentalPoint {
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

export interface car {
    brand: Brand
    model: string
    fuel: number
    fuelConsumption: number
    transmission: number
    quantityOfSeats: number
    pricePerHour: number
    Photos: Array<CarPhotos>
    rentalPoint: RentalPoint
}
