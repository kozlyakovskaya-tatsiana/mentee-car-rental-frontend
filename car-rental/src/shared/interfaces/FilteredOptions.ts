import Transmission from '../enums/Transmission'
import Fuel from '../enums/Fuel'

interface FilteredOptions {
    PageNumber: number
    PageSize: number
    CountryId?: string
    CityId?: string
    BrandId?: string
    transmissionType?: Transmission
    fuelType?: Fuel
    QuantityOfSeats?: number
    PickUpDateTime: string
    DropOffDateTime: string
    LessThenPrice?: number
    FuelConsumption?: number
}

export default FilteredOptions
