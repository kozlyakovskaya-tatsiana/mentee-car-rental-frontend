import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Autocomplete from '@mui/material/Autocomplete'
import Fade from '@mui/material/Fade'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import { City, Country } from 'shared/types/Locations'
import { getCities, getCountries } from 'services/location.service'

import {
    papersHandlerStyle,
    lotPaperStyle,
    useStyles,
    PageHandlerStyle,
} from './styles'

const HomePage: React.FC = () => {
    const styles = useStyles()
    const [checked, setChecked] = useState<boolean>(false)

    const [countries, setCountries] = useState<Country[]>([])
    const [cities, setCities] = useState<City[]>([])

    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const [allFieldsSelected, setAllFieldsSelected] = useState<boolean>(false)

    const getAllCountries = async () => {
        const countriesResponse = await getCountries()
        setCountries(countriesResponse.data)
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

    useEffect(() => {
        getAllCountries()
    }, [])

    useEffect(() => {
        if (selectedCity && selectedCountry) {
            setAllFieldsSelected(true)
        }
    }, [selectedCountry, selectedCity])

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
        console.log('start')
        setChecked(true)
        setTimeout(() => setChecked(false), 3000)
    }
    const onSubmit = () => {
        // Here request to back (filtering)
        console.log('whooho')
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
                                        defaultValue="2021-01-01T00:01"
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
                                        defaultValue="2021-01-01T00:01"
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
            </Box>
        </Box>
    )
}

export default HomePage
