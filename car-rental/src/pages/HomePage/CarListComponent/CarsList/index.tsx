/* eslint-disable no-unused-expressions */
import React from 'react'
import { Link } from 'react-router-dom'

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
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

    const [open, setOpen] = React.useState(false)

    const ErrorDialogOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    id="alert-dialog-title"
                    style={{ textAlign: 'center' }}
                >
                    Whoops.
                </DialogTitle>
                <DialogContent style={{ width: 300, height: 70 }}>
                    <DialogContentText
                        id="alert-dialog-description"
                        textAlign="center"
                    >
                        You are unauthorized. <br />
                        Please login or register
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid container spacing={1}>
                        <Grid
                            item
                            xs={6}
                            alignItems="center"
                            display="flex"
                            justifyContent="center"
                        >
                            <Link
                                to="/login"
                                onClick={handleClose}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button variant="outlined" color="secondary">
                                    Login page
                                </Button>
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            alignItems="center"
                            display="flex"
                            justifyContent="center"
                        >
                            <Button
                                onClick={handleClose}
                                variant="outlined"
                                color="secondary"
                            >
                                Ok
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
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
                                    <Button
                                        size="small"
                                        style={bookButtonStyles}
                                        color="secondary"
                                        variant="outlined"
                                        onClick={() => {
                                            isAuth
                                                ? handleClickOpen(car.id!)
                                                : ErrorDialogOpen()
                                        }}
                                    >
                                        Book
                                    </Button>
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
