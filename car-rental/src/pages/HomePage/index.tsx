import React from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'

import { useAuth } from 'context/authContext'
import { styled } from '@mui/material/styles'
import {
    bookButtonStyles,
    customStyledImgStyles,
    lotHeaderStyles,
    lotPaperStyle,
    lotPictureStyles,
    lotPriceStyles,
    papersHandlerStyle,
} from './styles'

interface brandType {
    name: string
    id: string
}

interface carPhotosType {}
interface rentalPointType {
    location: string
    id: string
}

interface carType {
    brand: brandType
    model: string
    fuel: number
    fuelConsumption: number
    transmission: number
    quantityOfSeats: number
    pricePerHour: number
    Photos: Array<carPhotosType>
    rentalPoint: rentalPointType
}

const TransmissionType: { [name: number]: string } = {
    0: 'Auto',
    1: 'Mechanic',
}

const FuelType: { [name: number]: string } = {
    0: 'Diesel',
    1: 'Bio',
}

const cars: Array<carType> = [
    {
        brand: { name: 'Audi', id: '1' },
        model: 'A4',
        fuel: 1,
        fuelConsumption: 5.3,
        transmission: 0,
        quantityOfSeats: 5,
        pricePerHour: 50,
        Photos: [],
        rentalPoint: { location: '1.23245, 3.112341212', id: '1' },
    },
    {
        brand: { name: 'BMV', id: '2' },
        model: 'RX',
        fuel: 0,
        fuelConsumption: 5.3,
        transmission: 1,
        quantityOfSeats: 8,
        pricePerHour: 177,
        Photos: [],
        rentalPoint: { location: '1.225341123, 3.1123411', id: '1' },
    },
]

const Img = styled('img')(customStyledImgStyles)

const HomePage: React.FC = () => {
    const { isAuth } = useAuth()
    return (
        <div>
            {isAuth ? (
                <Box component="main" style={papersHandlerStyle}>
                    {cars.map((car: carType) => (
                        <Paper
                            sx={lotPaperStyle}
                            key={`${car.brand.name.toString()} ${car.model}`}
                        >
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase sx={lotPictureStyles}>
                                        <Img
                                            alt="complex"
                                            src="https://www.domkrat.by/upload/img_catalog/a4/audi_a4_2020_1.jpg"
                                        />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid
                                        item
                                        xs
                                        container
                                        direction="column"
                                        spacing={2}
                                    >
                                        <Grid item xs>
                                            <Typography
                                                gutterBottom
                                                variant="subtitle1"
                                                style={lotHeaderStyles}
                                            >
                                                {`${car.brand.name.toString()} ${
                                                    car.model
                                                }`}
                                            </Typography>
                                            <Typography variant="body2">
                                                Seats: {car.quantityOfSeats}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Transmission:{' '}
                                                {
                                                    TransmissionType[
                                                        car.transmission
                                                    ]
                                                }
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Fuel type: {FuelType[car.fuel]}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Fuel/100km:{' '}
                                                {car.fuelConsumption}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {car.rentalPoint.location}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="subtitle1"
                                            style={lotPriceStyles}
                                        >
                                            {car.pricePerHour}$
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            to="/"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Typography
                                                sx={bookButtonStyles}
                                                variant="body2"
                                            >
                                                Book
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Box>
            ) : (
                <div />
            )}{' '}
        </div>
    )
}

export default HomePage
