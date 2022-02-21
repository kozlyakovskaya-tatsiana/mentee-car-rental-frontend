import Transmission from '../enums/Transmission'
import Fuel from '../enums/Fuel'

interface FilterOptions {
    PageNumber: number
    PageSize: number
    CountryId?: string
    CityId?: string
    BrandId?: string
    transmissionType?: Transmission
    fuelType?: Fuel
    quantityOfSeats?: number
    PickUpDateTime: string
    DropOffDateTime: string
    LessThenPrice?: number
    FuelConsumption?: number
    rentalPointId?: string
}

export default FilterOptions
