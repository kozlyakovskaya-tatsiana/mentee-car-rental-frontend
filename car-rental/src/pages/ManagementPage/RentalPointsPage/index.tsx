/* eslint-disable no-undef, @typescript-eslint/no-unused-vars,
no-unused-vars, @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@material-ui/core/TextField'
import { Alert, Fade } from '@mui/material'

import { getAddressByCoordinates } from 'services/location.service'
import { Coordinate } from 'shared/types/Locations'
import { Address, RentalPointType } from 'shared/types/RentalPoint'
import {
    createRentalPoint,
    deleteRentalPoint,
    getRentalPoints,
} from 'services/rentalPoint.service'

import TextFieldComponent from './TextFieldComponent'
import RentalPointsTable from './TableComponent'
import MapHandlerComponent from './MapHandlerComponent'

import { fieldsHandler, mainBoxStyles, paperStyles, useStyles } from './styles'

export const ManagementRentalPointsPage: React.FC = () => {
    const styles = useStyles()
    const [isFirstClickOnMap, setIsFirstClickOnMap] = useState<boolean>(true)
    const [alert, setAlert] = useState<boolean>(false)

    const [points, setPoints] = React.useState<google.maps.LatLng[]>([])
    const [rentalPoints, setRentalPoints] = useState<Array<RentalPointType>>([])

    const [input, setInput] = useState<Address>({
        country: '',
        city: '',
        address: '',
        name: '',
    })

    useEffect(() => {
        loadAllRentalPoints()
    }, [])

    useEffect(() => {
        if (rentalPoints) {
            loadAllPoints()
        }
    }, [rentalPoints])

    const onMapClick = (e: google.maps.MapMouseEvent) => {
        const response = e.latLng!.toJSON()
        const coords: Coordinate = {
            lat: response.lat.toString(),
            lng: response.lng.toString(),
        }
        getAddressByCoordinates(coords).then((fullAddress) => {
            const splittedAddress = fullAddress.toString().split(',')
            if (splittedAddress.length === 3) {
                splittedAddress.forEach((add: any) => {
                    add.trim()
                })
                setInput({
                    address: splittedAddress[0],
                    city: splittedAddress[1],
                    country: splittedAddress[2],
                    name: input.name,
                })
                if (isFirstClickOnMap) {
                    setPoints([...points, e.latLng!])
                    setIsFirstClickOnMap(false)
                } else {
                    const arr = points.pop()
                    setPoints([...points, e.latLng!])
                }
            } else {
                showErrorAlert()
            }
        })
    }

    const showErrorAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 4000)
    }

    const loadAllRentalPoints = () => {
        getRentalPoints().then((res) => {
            setRentalPoints(res.data)
        })
    }

    const createNewGeoLoc = (lat: number, lng: number) => {
        return new google.maps.LatLng(lat, lng)
    }

    const loadAllPoints = () => {
        const coordinates: google.maps.LatLng[] = []
        rentalPoints.forEach((rentalPoint) => {
            const coordinate = createNewGeoLoc(
                rentalPoint.location.latitude,
                rentalPoint.location.longitude
            )
            coordinates.push(coordinate)
        })
        setPoints(coordinates)
    }

    const onSubmit = () => {
        const coordinates = points[points.length - 1].toJSON()
        createRentalPoint(input, coordinates).then(() => {
            loadAllRentalPoints()
        })
    }

    const deleteRentalPointAsync = async (id: string) => {
        await deleteRentalPoint(id)
        loadAllRentalPoints()
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
                                                    value={input.country}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldComponent
                                                    readonly
                                                    fieldLabel="City"
                                                    value={input.city}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldComponent
                                                    readonly
                                                    fieldLabel="Address"
                                                    value={input.address}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box>
                                                <TextField
                                                    className={styles.field}
                                                    label="Name"
                                                    margin="normal"
                                                    variant="outlined"
                                                    InputProps={{
                                                        classes: {
                                                            root: styles.input,
                                                        },
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        focused: true,
                                                        classes: {
                                                            root: styles.label,
                                                        },
                                                    }}
                                                    onChange={(e) => {
                                                        setInput({
                                                            ...input,
                                                            name: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
                                            </Box>
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
                                        onClick={onSubmit}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <MapHandlerComponent
                                    clicks={points}
                                    setClicks={setPoints}
                                    onMapClick={onMapClick}
                                />
                                {alert && (
                                    <Fade in={alert}>
                                        <Alert severity="error">
                                            Choose another point. That mark
                                            doesn&apos;t have good place for our
                                            office
                                        </Alert>
                                    </Fade>
                                )}
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <RentalPointsTable
                                rentalPoints={rentalPoints}
                                deleteAction={deleteRentalPointAsync}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    )
}

export default ManagementRentalPointsPage
