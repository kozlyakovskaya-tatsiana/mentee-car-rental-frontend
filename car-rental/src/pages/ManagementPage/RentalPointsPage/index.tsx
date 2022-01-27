import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import { getCities, getCountries } from 'services/location.service'
import { City, Country } from 'shared/types/Locations'

import TextField from '@material-ui/core/TextField'

import TextFieldComponent from './TextFieldComponent'

import { fieldsHandler, mainBoxStyles, paperStyles, useStyles } from './styles'
import DenseTable from './TableComponent'
import MapComponent from './MapComponent'

export const ManagementRentalPointsPage: React.FC = () => {
    const styles = useStyles()

    const [countries, setCountries] = useState<Array<Country>>([
        { id: '', name: '' },
    ])
    const [cities, setCities] = useState<Array<City>>([{ id: '', name: '' }])
    const [rentalPoints, setRentalPoints] = useState<Array<any>>([{}])

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

    return (
        <Box component="main" sx={mainBoxStyles}>
            <Paper sx={paperStyles}>
                <Box sx={{ height: '100%', width: '100%' }}>
                    <Grid container spacing={1}>
                        <Grid container item xs={6}>
                            <Grid container item xs={12}>
                                <Box component="div" sx={fieldsHandler}>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            item
                                            xs={12}
                                            spacing={1}
                                        >
                                            <Grid item xs={4}>
                                                <TextFieldComponent
                                                    ocChangeFunction={
                                                        getCitiesByCountry
                                                    }
                                                    chooseOptionsArray={
                                                        countries
                                                    }
                                                    fieldLabel="Country"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldComponent
                                                    ocChangeFunction={
                                                        // get RP locations
                                                        () => {}
                                                    }
                                                    chooseOptionsArray={cities}
                                                    fieldLabel="City"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldComponent
                                                    ocChangeFunction={
                                                        // get RP locations
                                                        () => {}
                                                    }
                                                    chooseOptionsArray={cities}
                                                    fieldLabel="Address"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    component="div"
                                    sx={{
                                        padding: '10px',
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            width: '100%',
                                            bgcolor: 'secondary.main',
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <MapComponent />
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <DenseTable />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    )
}

export default ManagementRentalPointsPage
