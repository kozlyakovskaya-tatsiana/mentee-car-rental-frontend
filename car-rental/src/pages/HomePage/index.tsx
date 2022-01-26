import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@material-ui/core/TextField'
import { Autocomplete, Grid, Grow } from '@mui/material'
import Button from '@mui/material/Button'

import { CityType, CountryType } from 'shared/types/Locations'
import { getCities, getCountries } from 'services/location.service'

import {
    papersHandlerStyle,
    lotPaperStyle,
    useStyles,
    PageHandlerStyle,
} from './styles'

const HomePage: React.FC = () => {
    const styles = useStyles()

    const [countries, setCountries] = useState<Array<CountryType>>([
        { id: '', name: '' },
    ])
    const [cities, setCities] = useState<Array<CityType>>([
        { id: '', name: '' },
    ])

    useEffect(() => {
        const getAllCountries = async () => {
            const countriesResponse = await getCountries()
            setCountries(countriesResponse.data)
        }
        getAllCountries()
    }, [])

    const formik = useFormik({
        initialValues: {},
        onSubmit: (values: any) => {
            console.log(values)
        },
    })

    const [countryChecked, setCountryChecked] = React.useState(false)
    const [cityChecked, setCityChecked] = React.useState(false)

    const handleCountryFieldChange = () => {
        setCountryChecked((prev) => true)
    }

    const handleCityFieldChange = () => {
        setCityChecked((prev) => true)
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

    return (
        <Box component="main" style={PageHandlerStyle}>
            <Box style={papersHandlerStyle}>
                <Paper sx={lotPaperStyle}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Autocomplete
                                classes={{
                                    inputRoot: styles.autoComplete,
                                    paper: styles.paper,
                                }}
                                id="country-select"
                                options={countries.map(
                                    (option: CountryType) => option.name
                                )}
                                forcePopupIcon={false}
                                onChange={(event, value) => {
                                    if (value) {
                                        getCitiesByCountry(value)
                                        handleCountryFieldChange()
                                    }
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className={styles.field}
                                        label="Country"
                                        margin="normal"
                                        variant="outlined"
                                        InputProps={{
                                            ...params.InputProps,
                                            // readOnly: true,
                                            classes: {
                                                root: styles.input,
                                            },
                                        }}
                                        InputLabelProps={{
                                            classes: {
                                                root: styles.label,
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Grow
                                in={countryChecked}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(countryChecked ? { timeout: 700 } : {})}
                            >
                                <Autocomplete
                                    classes={{
                                        inputRoot: styles.autoComplete,
                                        paper: styles.paper,
                                    }}
                                    id="city-select"
                                    options={cities.map(
                                        (option: CityType) => option.name
                                    )}
                                    forcePopupIcon={false}
                                    onChange={(event, value) => {
                                        if (value) {
                                            handleCityFieldChange()
                                        }
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            className={styles.field}
                                            label="City"
                                            margin="normal"
                                            variant="outlined"
                                            InputProps={{
                                                ...params.InputProps,
                                                classes: {
                                                    root: styles.input,
                                                },
                                            }}
                                            InputLabelProps={{
                                                classes: {
                                                    root: styles.label,
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Grow>
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
                                <Grow
                                    in={cityChecked}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(cityChecked ? { timeout: 700 } : {})}
                                >
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
                                            defaultValue="1970-01-01T00:01"
                                            InputProps={{
                                                classes: {
                                                    root: styles.input,
                                                },
                                            }}
                                            InputLabelProps={{
                                                classes: {
                                                    root: styles.label,
                                                },
                                            }}
                                        />
                                    </Stack>
                                </Grow>
                            </Grid>
                            <Grid item xs={4}>
                                <Grow
                                    in={cityChecked}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(cityChecked ? { timeout: 700 } : {})}
                                >
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
                                            defaultValue="1970-01-01T00:01"
                                            InputProps={{
                                                classes: {
                                                    root: styles.input,
                                                },
                                            }}
                                            InputLabelProps={{
                                                classes: {
                                                    root: styles.label,
                                                },
                                            }}
                                        />
                                    </Stack>
                                </Grow>
                            </Grid>
                            <Grid item xs={4}>
                                <Grow
                                    in={cityChecked}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(cityChecked ? { timeout: 700 } : {})}
                                >
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            bgcolor: 'secondary.main',
                                        }}
                                    >
                                        Search
                                    </Button>
                                </Grow>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    )
}

export default HomePage
