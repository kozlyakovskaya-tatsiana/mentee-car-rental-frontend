import Fuel from 'shared/enums/Fuel'
import Transmission from 'shared/enums/Transmission'
import { CarPhotos } from './Attachment'
import { Brand } from './Brand'
import { RentalPoint } from './RentalPoint'

export interface Car {
    brand: Brand
    model: string
    fuel: Fuel
    fuelConsumption: number
    transmission: Transmission
    quantityOfSeats: number
    pricePerHour: number
    Photos: CarPhotos[]
    rentalPoint: RentalPoint
}
