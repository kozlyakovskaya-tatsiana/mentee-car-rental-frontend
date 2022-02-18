/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
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
    TextField,
    useTheme,
} from '@mui/material'
import Button from '@mui/material/Button'
import { BallTriangle } from 'react-loader-spinner'

import { Car } from 'models/Car'
import Transmission from 'shared/enums/Transmission'
import Fuel from 'shared/enums/Fuel'
import FilteredOptions from 'shared/interfaces/FilteredOptions'

import CarList from './CarsList'

import {
    bookButtonStyles,
    cardStyle,
    carLoaderStyle,
    lotButtonStyles,
    lotPaperStyle,
    papersHandlerStyle,
} from './styles'
import LoadingComponent from './Loading'
import NotFound from './NotFound'

interface CarListComponentProps {
    cars: Car[]
    filterOptions: FilteredOptions
}

const CarListComponent: React.FC<CarListComponentProps> = (
    props: CarListComponentProps
) => {
    const { cars, filterOptions } = props
    const [loading, setLoading] = React.useState<boolean>(true)
    const [updated, setUpdated] = React.useState<boolean>(true)
    const [isFirstLoad, setIsFirstLoad] = React.useState<boolean>(true)
    const theme = useTheme()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const loader = async () => {
        await setLoading(true)
        await setUpdated(false)
        await setTimeout(() => {
            if (cars.length < 1) setUpdated(false)
            else setUpdated(true)
            setLoading(false)
        }, 1500)
    }

    useEffect(() => {
        if (!isFirstLoad) loader()
        else setIsFirstLoad(false)
    }, [cars])

    let component: React.FC
    if (updated)
        return (
            <div>
                <Box component="main" style={papersHandlerStyle}>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Subscribe</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To subscribe to this website, please enter your
                                email address here. We will send updates
                                occasionally.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                    <CarList cars={cars} handleClickOpen={handleClickOpen} />
                </Box>
            </div>
        )
    if (loading) return <LoadingComponent />
    return <NotFound />
}

export default CarListComponent
