import Transmission from '../enums/Transmission'
import Fuel from '../enums/Fuel'

interface FilteredOptions {
    PageNumber: number
    PageSize: number
    CountryId?: string
    CityId?: string
    BrandId?: string
    TransmissionType?: Transmission
    FuelType?: Fuel
    QuantityOfSeats?: number
    PickUpDateTime: string
    DropOffDateTime: string
    LessThenPrice?: number
    FuelConsumption?: number
}

export default FilteredOptions
