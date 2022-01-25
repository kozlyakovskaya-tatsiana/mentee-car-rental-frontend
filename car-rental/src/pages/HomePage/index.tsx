import React from 'react'
import { useFormik } from 'formik'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@material-ui/core/TextField'
import { Autocomplete, Grid, Grow, useTheme } from '@mui/material'

import { useAuth } from 'context/authContext'
import { papersHandlerStyle, lotPaperStyle, useStyles } from './styles'

// Countries from backend
const countries = [{ label: 'Andorra' }, { label: 'United Arab Emirates' }]

// Cities from backend
const cities = [{ label: 'New-York' }, { label: 'Nepal' }]

interface CountryType {
    label: string
}

interface CityType {
    label: string
}

const HomePage: React.FC = () => {
    const { isAuth } = useAuth()

    const styles = useStyles()
    const theme = useTheme()

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

    return (
        <div>
            {isAuth ? (
                <Box component="main" style={papersHandlerStyle}>
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
                                        (option: CountryType) => option.label
                                    )}
                                    forcePopupIcon={false}
                                    onChange={handleCountryFieldChange}
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
                                    {...(countryChecked
                                        ? { timeout: 700 }
                                        : {})}
                                >
                                    <Autocomplete
                                        classes={{
                                            inputRoot: styles.autoComplete,
                                            paper: styles.paper,
                                        }}
                                        id="city-select"
                                        options={cities.map(
                                            (option: CityType) => option.label
                                        )}
                                        forcePopupIcon={false}
                                        onChange={handleCityFieldChange}
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
                            <Grid item xs={12}>
                                <Grow
                                    in={cityChecked}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(cityChecked ? { timeout: 700 } : {})}
                                >
                                    <div>
                                        {' '}
                                        A lot of fields which helps you filter
                                        stuff
                                        <br /> and &quot;submit&quot; button
                                    </div>
                                </Grow>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            ) : (
                <div />
            )}{' '}
        </div>
    )
}

export default HomePage
