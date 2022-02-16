import React, { ChangeEvent, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Autocomplete from '@mui/material/Autocomplete'
import Fade from '@mui/material/Fade'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Pagination from '@mui/material/Pagination'
import Collapse from '@mui/material/Collapse'

import { City, Country } from 'shared/types/Locations'
import { Car } from 'models/Car'
import { getCities, getCountries } from 'services/location.service'
import { getAllCarBrands, getFilteredCars } from 'services/car.service'
import FilteredOptions from 'shared/interfaces/FilteredOptions'

import CarPage from './CarPage'

import {
    papersHandlerStyle,
    lotPaperStyle,
    useStyles,
    PageHandlerStyle,
} from './styles'
import { BrandInputType } from '../../shared/types/CarTypes'

const HomePage: React.FC = () => {
    const styles = useStyles()

    // Activate button statement
    const [checked, setChecked] = useState<boolean>(false)

    // Statement for submitting button event
    const [submit, setSubmit] = useState<boolean>(false)

    // Entity containers
    const [countries, setCountries] = useState<Country[]>([])
    const [cities, setCities] = useState<City[]>([])
    const [cars, setCars] = useState<Car[]>([])

    // Main selectors
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const [pickUp, setPickUp] = useState<string>(
        new Date().toISOString().slice(0, 16)
    )
    const [dropOff, setDropOff] = useState<string>(
        new Date().toISOString().slice(0, 16)
    )
    const [allFieldsSelected, setAllFieldsSelected] = useState<boolean>(false)

    // Filter statement
    const [filterProps, setFilterProps] = useState<FilteredOptions>(
        {} as FilteredOptions
    )

    // Filter options statements
    // ** State with all available brands (loaded from back by useEffect)
    const [brandSelect, setBrandSelect] = React.useState<BrandInputType[]>([])
    // ** Selected brand state
    const [brand, setBrand] = React.useState<BrandInputType | null>(null)
    //

    // Pagination statement
    const [pagesQuantity, setPagesQuantity] = useState<number>(1)

    // Main form loader methods
    const getAllCountries = async () => {
        const countriesResponse = await getCountries()
        setCountries(countriesResponse.data)
    }
    const getAllBrands = async () => {
        const brandsResponse = await getAllCarBrands()
        setBrandSelect([...brandsResponse.data])
    }
    const getCitiesByCountry = async (countryName: string) => {
        const country = countries.find((element, index, array) => {
            if (element.name === countryName) {
                return true
            }
            return false
        })
        if (country) {
            const cityResponse = await getCities(country)
            setCities(cityResponse.data)
        }
    }

    // Use effects
    useEffect(() => {
        getAllCountries()
        getAllBrands()
    }, [])

    useEffect(() => {
        if (selectedCountry && selectedCity) {
            setAllFieldsSelected(true)
        }
    }, [selectedCountry, selectedCity])

    useEffect(() => {
        if (allFieldsSelected) {
            // setFilterProps({ ...filterProps, BrandId: brand?.id })
            console.log(filterProps)
            getFilteredCars(filterProps).then((response) => {
                setCars(response.data.cars)
                setPagesQuantity(Math.ceil(response.data.quantityOfResults / 3))
                setSubmit(true)
            })
        }
    }, [filterProps])

    useEffect(() => {
        getAllCarBrands().then((response) => {
            setBrandSelect([...response.data])
        })
    }, [])

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
            if (selected) {
                setSelectedCity(selected)
            }
        }
    }
    const showWarningAlert = () => {
        setChecked(true)
        setTimeout(() => setChecked(false), 3000)
    }
    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setCars([])
        const params: FilteredOptions = { ...filterProps, PageNumber: value }
        getFilteredCars(params).then((response) => {
            setCars(response.data.cars)
            setPagesQuantity(Math.ceil(response.data.quantityOfResults / 3))
        })
    }
    const renderOptions = (props: any, option: any) => (
        <li {...props} key={option.name}>
            {option.name}
        </li>
    )

    const onSubmit = () => {
        const params: FilteredOptions = {
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
                <Paper sx={lotPaperStyle}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Autocomplete
                                classes={{
                                    inputRoot: styles.autoComplete,
                                }}
                                id="country-select"
                                options={countries.map(
                                    (option: Country) => option.name
                                )}
                                forcePopupIcon={false}
                                onChange={onCountrySelected}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className={styles.field}
                                        label="Country"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                classes={{
                                    inputRoot: styles.autoComplete,
                                }}
                                id="city-select"
                                options={cities.map(
                                    (option: City) => option.name
                                )}
                                forcePopupIcon={false}
                                onChange={onCitySelected}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className={styles.field}
                                        label="City"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={1}
                            xs={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item xs={4}>
                                <Stack
                                    component="form"
                                    noValidate
                                    spacing={1}
                                    classes={{
                                        inputRoot: styles.stack,
                                    }}
                                >
                                    <TextField
                                        id="PickUpBookingTime"
                                        label="Pick-up"
                                        type="datetime-local"
                                        classes={{ root: styles.field }}
                                        defaultValue={pickUp}
                                        onChange={(e: any) =>
                                            setPickUp(e.target.value)
                                        }
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack
                                    component="form"
                                    noValidate
                                    spacing={1}
                                    classes={{
                                        inputRoot: styles.stack,
                                    }}
                                >
                                    <TextField
                                        id="DropOffBookingTime"
                                        label="Drop-off"
                                        type="datetime-local"
                                        classes={{ root: styles.field }}
                                        defaultValue={dropOff}
                                        onChange={(e: any) =>
                                            setDropOff(e.target.value)
                                        }
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                    }}
                                    color={
                                        allFieldsSelected
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onClick={
                                        allFieldsSelected
                                            ? onSubmit
                                            : showWarningAlert
                                    }
                                >
                                    Search
                                </Button>
                            </Grid>
                            <Fade in={checked}>
                                <Grid item xs={12}>
                                    <Alert severity="error">
                                        Insert all fields!
                                    </Alert>
                                </Grid>
                            </Fade>
                        </Grid>
                    </Grid>
                </Paper>
                <Fade in={submit}>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <Paper
                                style={{
                                    marginTop: 11,
                                    height: 580,
                                    backgroundColor: '#1a1a1a',
                                }}
                            >
                                Filter options
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={brandSelect}
                                    sx={{ width: 300 }}
                                    renderOption={renderOptions}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Brand" />
                                    )}
                                    onChange={(event, value) => {
                                        setBrand(value)
                                    }}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <CarPage cars={cars} />
                        </Grid>
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
                </Fade>
            </Box>
        </Box>
    )
}

export default HomePage
