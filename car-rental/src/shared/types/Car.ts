export interface Brand {
    name: string
    id: string
}

export interface CarPhotos {}

export interface RentalPoint {
    location: string
    id: string
}

export enum Transmissions {
    Auto,
    Mechanic,
}
export enum Fuels {
    Gasoline,
    Diesel,
    BioDiesel,
    Ethanol,
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
