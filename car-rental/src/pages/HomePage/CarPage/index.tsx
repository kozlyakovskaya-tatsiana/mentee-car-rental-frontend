import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Pagination,
    useTheme,
} from '@mui/material'
import Button from '@mui/material/Button'
import { BallTriangle } from 'react-loader-spinner'

import { Car } from 'models/Car'
import Transmission from 'shared/enums/Transmission'
import Fuel from 'shared/enums/Fuel'

import {
    bookButtonStyles,
    cardStyle,
    carLoaderStyle,
    lotButtonStyles,
    lotPaperStyle,
    papersHandlerStyle,
} from './styles'

interface CarPageProps {
    cars: Car[]
}

const CarPage: React.FC<CarPageProps> = (props: CarPageProps) => {
    const { cars } = props
    const theme = useTheme()

    return (
        <div>
            <Box component="main" style={papersHandlerStyle}>
                {cars.length < 1 ? (
                    <div style={carLoaderStyle}>
                        <BallTriangle
                            width="100"
                            ariaLabel="loading"
                            color="#ff2172"
                        />
                    </div>
                ) : (
                    cars.map((car: Car) => (
                        <Card
                            style={cardStyle}
                            elevation={5}
                            key={car.brand + car.model + car.rentalPointId}
                        >
                            <Grid container>
                                <Grid item xs={3}>
                                    <CardMedia
                                        component="img"
                                        alt={`${car.brand.name} ${car.model}`}
                                        style={{ minHeight: '180px' }}
                                        image={`data:${car.photos[0].fileFormat};base64,${car.photos[0].content}`}
                                    />
                                </Grid>
                                <Grid container item xs={9}>
                                    <Grid item xs={10}>
                                        <CardContent style={lotPaperStyle}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                color={
                                                    theme.palette.secondary.main
                                                }
                                            >
                                                {`${car.brand.name} ${car.model}`}
                                            </Typography>
                                            <Typography variant="body2">
                                                Fuel: {Fuel[car.fuel]}
                                                <br />
                                                Fuel Consumption (liter/100km):{' '}
                                                {car.fuelConsumption}
                                                <br />
                                                Transmission:{' '}
                                                {Transmission[car.transmission]}
                                                <br />
                                                Quantity of seats:{' '}
                                                {car.quantityOfSeats}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <CardActions style={lotButtonStyles}>
                                            <Typography variant="body2">
                                                {car.pricePerHour} $
                                            </Typography>
                                            <Button
                                                size="small"
                                                style={bookButtonStyles}
                                                color="secondary"
                                            >
                                                Book
                                            </Button>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    ))
                )}
            </Box>
        </div>
    )
}

export default CarPage
