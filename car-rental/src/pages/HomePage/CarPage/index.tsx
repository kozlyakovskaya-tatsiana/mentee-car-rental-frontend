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
import { carType, FuelType, TransmissionType } from 'shared/types/car'





const Img = styled('img')(customStyledImgStyles)

const CarPage: React.FC = (filter: any) => {
    const { isAuth } = useAuth()

    // Here we get filtered car list by props from form on Home page
    const cars: Array<carType> = []

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

export default CarPage
