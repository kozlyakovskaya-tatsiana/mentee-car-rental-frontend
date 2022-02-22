import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import moment from 'moment'

import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'

import { City, Country } from 'shared/types/Locations'
import { Car } from 'models/Car'
import { getCities, getCountries } from 'services/location.service'
import { getAllCarBrands, getFilteredCars } from 'services/car.service'
import FilterOptions from 'shared/interfaces/FilterOptions'

import CarListComponent from './CarListComponent'

import { papersHandlerStyle, useStyles, PageHandlerStyle } from './styles'
import { BrandInputType } from '../../shared/types/CarTypes'
import FilterOptionsComponent from './FilterOptionsComponent'
import HeadFilteringComponent from './HeadFilteringComponent'

import { getRentalPointsByCity } from '../../services/rentalPoint.service'
import { RentalPointType } from '../../shared/types/RentalPoint'

const HomePage: React.FC = () => {
    const now = moment(new Date().toISOString().slice(0, 16))
    // Activate button statement
    const [checked, setChecked] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    // Statement for submitting button event
    const [submit, setSubmit] = useState<boolean>(false)

    // Entity containers
    const [countries, setCountries] = useState<Country[]>([])
    const [cities, setCities] = useState<City[]>([])
    const [cars, setCars] = useState<Car[]>([])

    // Head filter selectors
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const [dataTimeApproved, setDataTimeApproved] = useState<boolean>(false)
    const [pickUp, setPickUp] = useState<string>(
        new Date().toISOString().slice(0, 16)
    )
    const [dropOff, setDropOff] = useState<string>(
        new Date().toISOString().slice(0, 16)
    )
    const [allFieldsSelected, setAllFieldsSelected] = useState<boolean>(false)

    // Filter statement
    const [filterProps, setFilterProps] = useState<FilterOptions>(
        {} as FilterOptions
    )

    // available filters selects
    const [brandSelect, setBrandSelect] = React.useState<BrandInputType[]>([])
    const [rentalPoints, setRentalPoints] = React.useState<RentalPointType[]>(
        []
    )

    // Filter options statements
    const [brand, setBrand] = React.useState<BrandInputType | null>(null)
    const [fuel, setFuel] = React.useState<number | undefined>()
    const [transmission, setTransmission] = React.useState<number | undefined>()
    const [quantityOfSeats, setQuantityOfSeats] = React.useState<
        string | undefined
    >('')
    const [fuelConsumption, setFuelConsumption] = React.useState<
        string | undefined
    >('')
    const [price, setPrice] = React.useState<number | undefined>(151)
    const [rentalPoint, setRentalPoint] =
        React.useState<RentalPointType | null>(null)

    // Pagination statement
    const [pagesQuantity, setPagesQuantity] = useState<number>(1)

    // Main form loader methods
    const getAllCountries = () => {
        getCountries().then((response) => setCountries(response.data))
    }
    const getAllBrands = () => {
        getAllCarBrands().then((response) => setBrandSelect([...response.data]))
    }
    const getCitiesByCountry = async (countryName: string) => {
        const country = countries.find((element, index, array) => {
            return element.name === countryName
        })
        if (country) {
            getCities(country).then((response) => {
                setCities(response.data)
            })
        }
    }
    const showWarningAlert = () => {
        setChecked(true)
        setTimeout(() => setChecked(false), 3000)
    }
    // Use effects
    useEffect(() => {
        getAllCountries()
        getAllBrands()
    }, [])

    useEffect(() => {
        if (moment(dropOff).diff(moment(pickUp)) < 60000 * 10) {
            setDataTimeApproved(false)
        } else setDataTimeApproved(true)
    }, [pickUp, dropOff])

    useEffect(() => {
        if (selectedCountry && selectedCity && dataTimeApproved)
            setAllFieldsSelected(true)
        else setAllFieldsSelected(false)
    }, [selectedCountry, selectedCity, dataTimeApproved])

    useEffect(() => {
        if (selectedCity)
            getRentalPointsByCity(selectedCity).then((response) =>
                setRentalPoints(response.data)
            )
    }, [selectedCity])

    useEffect(() => {
        if (allFieldsSelected) {
            setLoading(true)
            getFilteredCars(filterProps)
                .then((response) => {
                    setCars(response.data.cars)
                    setPagesQuantity(
                        Math.ceil(response.data.totalCarsCount / 3)
                    )
                    setSubmit(true)
                })
                .finally(() => setLoading(false))
        }
    }, [filterProps])

    useEffect(() => {
        setFilterProps({
            ...filterProps,
            BrandId: brand?.id,
            fuelType: !Number.isNaN(Number(fuel)) ? Number(fuel) : undefined,
            transmissionType: !Number.isNaN(transmission)
                ? transmission
                : undefined,
            quantityOfSeats:
                Number(quantityOfSeats) !== 0
                    ? Number(quantityOfSeats)
                    : undefined,
            FuelConsumption:
                Number(fuelConsumption) !== 0
                    ? Number(fuelConsumption)
                    : undefined,
            LessThenPrice: price !== 151 ? price : undefined,
            rentalPointId: rentalPoint?.id,
        })
    }, [
        brand,
        fuel,
        transmission,
        quantityOfSeats,
        fuelConsumption,
        price,
        rentalPoint,
    ])

    // Change handlers
    const onCountrySelected = (event: any, value: any) => {
        if (value) {
            const selected = countries.find(
                (element: Country) => element.name === value
            )
            getCitiesByCountry(value)
            if (selected) {
                setSelectedCountry(selected)
            }
        }
    }
    const onCitySelected = (event: any, value: any) => {
        if (value) {
            const selected = cities.find(
                (element: City) => element.name === value
            )
            if (selected) setSelectedCity(selected)
        }
    }
    const onPickUpChanged = (e: any) => {
        const pickUpDate = moment(e.target.value)
        if (now > pickUpDate) {
            showWarningAlert()
        } else {
            setPickUp(e.target.value)
        }
    }
    const onDropOffChanged = (e: any) => {
        const dropOffDate = moment(e.target.value)
        const pickUpD = moment(pickUp)
        if (now > dropOffDate || pickUpD > dropOffDate) {
            showWarningAlert()
        } else {
            setDropOff(e.target.value)
        }
    }
    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setCars([])
        const params: FilterOptions = { ...filterProps, PageNumber: value }
        getFilteredCars(params).then((response) => {
            setCars(response.data.cars)
            setPagesQuantity(Math.ceil(response.data.totalCarsCount / 3))
        })
    }
    const onBrandSelected = (event: SyntheticEvent, value: any) => {
        setBrand(value)
    }
    const onRentalPointSelected = (event: SyntheticEvent, value: any) => {
        setRentalPoint(value)
    }
    const onSelectFuel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFuel(Number(event.target.value))
    }
    const onSelectTransmission = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setTransmission(Number(event.target.value))
    }
    const onQuantityChange = (e: any) => {
        if (Number(e.target.value) < 0) {
            e.target.value = 0
        } else {
            setQuantityOfSeats(e.target.value)
        }
    }
    const onFuelConsumptionChange = (e: any) => {
        if (Number(e.target.value) < 0) {
            e.target.value = 0
        } else {
            setFuelConsumption(e.target.value)
        }
    }
    const onPriceChange = (e: SyntheticEvent, value: number | number[]) => {
        setPrice(Number(value))
    }

    // Submit button handler
    const onSubmit = () => {
        const params: FilterOptions = {
            ...filterProps,
            PageNumber: 1,
            PageSize: 3,
            CountryId: selectedCountry!.id,
            CityId: selectedCity!.id,
            PickUpDateTime: pickUp,
            DropOffDateTime: dropOff,
        }
        setFilterProps({ ...params })
    }

    return (
        <Box component="main" style={PageHandlerStyle}>
            <Box style={papersHandlerStyle}>
                <HeadFilteringComponent
                    countries={countries}
                    onCountrySelected={onCountrySelected}
                    cities={cities}
                    onCitySelected={onCitySelected}
                    pickUp={pickUp}
                    updatePickUp={onPickUpChanged}
                    dropOff={dropOff}
                    updateDropOff={onDropOffChanged}
                    allFieldsSelected={allFieldsSelected}
                    showWarningAlert={showWarningAlert}
                    checked={checked}
                    onSubmit={onSubmit}
                    dataTimeApproved={dataTimeApproved}
                />
                <Fade in={submit}>
                    <Grid container spacing={1}>
                        <Grid item container spacing={1}>
                            <Grid item xs={3}>
                                <FilterOptionsComponent
                                    brand={brand}
                                    brandSelect={brandSelect}
                                    onBrandSelected={onBrandSelected}
                                    fuel={fuel}
                                    onSelectFuel={onSelectFuel}
                                    onSelectTransmission={onSelectTransmission}
                                    transmission={transmission}
                                    onQuantityChange={onQuantityChange}
                                    quantityOfSeats={quantityOfSeats}
                                    fuelConsumption={fuelConsumption}
                                    onFuelConsumptionChange={
                                        onFuelConsumptionChange
                                    }
                                    price={price}
                                    onPriceChange={onPriceChange}
                                    rentalPoints={rentalPoints}
                                    rentalPoint={rentalPoint}
                                    onRentalPointSelected={
                                        onRentalPointSelected
                                    }
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <CarListComponent
                                    cars={cars}
                                    filterOptions={filterProps}
                                    updateCars={onSubmit}
                                    loading={loading}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={1}>
                            <Grid item xs={3} />
                            <Grid item xs={9}>
                                <Pagination
                                    count={pagesQuantity}
                                    variant="outlined"
                                    shape="rounded"
                                    color="secondary"
                                    onChange={handlePageChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Fade>
            </Box>
        </Box>
    )
}

export default HomePage
