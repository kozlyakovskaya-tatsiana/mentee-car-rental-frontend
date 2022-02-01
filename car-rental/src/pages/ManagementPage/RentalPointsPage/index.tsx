/* eslint-disable no-undef, @typescript-eslint/no-unused-vars,
no-unused-vars, @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'
import Geocode from 'react-geocode'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import {
    getAddressByCoordinates,
    getCities,
    getCountries,
    getRentalPoints,
} from 'services/location.service'
import { City, Coordinate, Country } from 'shared/types/Locations'

import TextFieldComponent from './TextFieldComponent'
import RentalPointsTable from './TableComponent'
import MapHandlerComponent from './MapHandlerComponent'

import { fieldsHandler, mainBoxStyles, paperStyles, useStyles } from './styles'

const address = {
    country: '',
    city: '',
    address: '',
}

export const ManagementRentalPointsPage: React.FC = () => {
    const styles = useStyles()
    const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([])
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [countries, setCountries] = useState<Array<Country>>([
        { id: '', name: '' },
    ])
    const [cities, setCities] = useState<Array<City>>([{ id: '', name: '' }])
    const [rentalPoints, setRentalPoints] = useState<Array<any>>([{}])

    const onMapClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!])
        const response = e.latLng!.toJSON()
        const coords: Coordinate = {
            lat: response.lat.toString(),
            lng: response.lng.toString(),
        }
        getAddressByCoordinates(coords)
    }

    const getAllCountries = () => {
        getCountries().then((response) => {
            setCountries(response.data)
        })
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

    const getAllRentPoints = async () => {
        const rentPointsResponse = await getRentalPoints()
        setRentalPoints(rentPointsResponse.data)
        return rentalPoints
    }

    const [load, setLoad] = useState<boolean>(true)

    const loader = async () => {
        await getAllCountries()
        await getAllRentPoints()
    }

    useEffect(() => {
        if (load) {
            loader()
            setLoad(false)
        }
    }, [load])

    const test = async () => {
        await loadAllPoints()
    }

    useEffect(() => {
        test()
    }, [rentalPoints])

    const createNewGeoLock = (lat: number, lng: number) => {
        return new google.maps.LatLng(lat, lng)
    }

    const loadAllPoints = () => {
        const coordinates: google.maps.LatLng[] = []
        rentalPoints.forEach((rentalPoint) => {
            const coordinate = createNewGeoLock(
                rentalPoint.location.latitude,
                rentalPoint.location.longitude
            )
            coordinates.push(coordinate)
        })
        setClicks(coordinates)
    }
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
                                                    readonly
                                                    fieldLabel="Country"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldComponent
                                                    readonly
                                                    fieldLabel="City"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldComponent
                                                    readonly
                                                    fieldLabel="Address"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextFieldComponent
                                                readonly={false}
                                                fieldLabel="Name"
                                            />
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
                                <MapHandlerComponent
                                    clicks={clicks}
                                    setClicks={setClicks}
                                    onMapClick={onMapClick}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <RentalPointsTable />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    )
}

export default ManagementRentalPointsPage
