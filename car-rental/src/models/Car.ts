import Fuel from 'shared/enums/Fuel'
import Transmission from 'shared/enums/Transmission'
import { CarPhoto } from './Attachment'
import { Brand } from './Brand'

export interface Car {
    id?: string
    model: string
    fuel: Fuel
    fuelConsumption: number
    transmission: Transmission
    quantityOfSeats: number
    pricePerHour: number
    photos: CarPhoto[]
    brand: Brand
    rentalPointId: string
}
