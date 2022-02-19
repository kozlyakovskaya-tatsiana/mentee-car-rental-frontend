/* eslint-disable no-unused-expressions */
import React from 'react'

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    useTheme,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { Car } from 'models/Car'
import Fuel from 'shared/enums/Fuel'
import Transmission from 'shared/enums/Transmission'

import {
    bookButtonStyles,
    cardStyle,
    lotButtonStyles,
    lotPaperStyle,
} from '../styles'

interface CarListProps {
    handleClickOpen: (carId: string) => void
    cars: Car[]
    isUserAuthenticate: () => boolean
}

export const CarList: React.FC<CarListProps> = (props) => {
    const theme = useTheme()
    const { cars, handleClickOpen, isUserAuthenticate } = props
    const isAuth = isUserAuthenticate()
    return (
        <div>
            {cars.map((car: Car) => (
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
                                        color={theme.palette.secondary.main}
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
                                        Quantity of seats: {car.quantityOfSeats}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={2}>
                                <CardActions style={lotButtonStyles}>
                                    <Typography variant="body2">
                                        {car.pricePerHour} $
                                    </Typography>
                                    {isAuth && (
                                        <Button
                                            size="small"
                                            style={bookButtonStyles}
                                            color="secondary"
                                            variant="outlined"
                                            onClick={() => {
                                                handleClickOpen(car.id!)
                                            }}
                                        >
                                            Book
                                        </Button>
                                    )}
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </div>
    )
}

export default CarList
