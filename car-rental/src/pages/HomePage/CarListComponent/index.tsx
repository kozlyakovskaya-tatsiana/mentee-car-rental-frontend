/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'

import Box from '@mui/material/Box'

import { Car } from 'models/Car'
import FilterOptions from 'shared/interfaces/FilterOptions'
import { useAuth } from 'contextes/authContext'

import CarList from './CarsList'

import LoadingComponent from './Loading'
import NotFound from './NotFound'
import BookingPopupComponent from './BookingPopupComponent'

import { papersHandlerStyle } from './styles'
import { lockCar, unlockCar } from '../../../services/car.service'
import BookCarRequestModel from '../../../shared/interfaces/BookCarRequestModel'

interface CarListComponentProps {
    cars: Car[]
    filterOptions: FilterOptions
    updateCars: () => void
    loading: boolean
}

const CarListComponent: React.FC<CarListComponentProps> = (
    props: CarListComponentProps
) => {
    const { isUserAuthenticate } = useAuth()

    const { cars, filterOptions, updateCars, loading } = props

    const [chosenCar, setChosenCar] = React.useState<Car | undefined>()

    const [open, setOpen] = React.useState<boolean>(false)
    const [isNotFound, setIsNotFound] = React.useState<boolean>(false)
    const [submitted, setSubmitted] = React.useState<boolean>(false)
    const [approved, setApproved] = React.useState<boolean>(false)

    React.useEffect(() => {
        setIsNotFound(false)
    }, [cars])

    const handleClickOpen = (carId: string) => {
        const carForBooking = cars.find((car, index, array) => {
            return car.id === carId
        })
        if (carForBooking) lockCar(carForBooking.id!)
        setChosenCar(carForBooking)
        setOpen(true)
    }

    const handleCanceledClose = () => {
        if (chosenCar) unlockCar(chosenCar.id!)
        setOpen(false)
        setChosenCar(undefined)
    }
    const handleSubmitted = () => {
        setSubmitted(true)
    }
    const handleApproved = () => {
        setApproved(true)
    }
    const handleClose = () => {
        setOpen(false)
        setSubmitted(false)
        setApproved(false)
        setChosenCar(undefined)
        updateCars()
    }
    return (
        <div>
            <Box component="main" style={papersHandlerStyle}>
                <BookingPopupComponent
                    open={open}
                    submitted={submitted}
                    approved={approved}
                    handleCanceledClose={handleCanceledClose}
                    handleSubmitted={handleSubmitted}
                    handleApproved={handleApproved}
                    chosenCar={chosenCar}
                    filterOptions={filterOptions}
                    handleClose={handleClose}
                />
                {!loading && (
                    <CarList
                        cars={cars}
                        handleClickOpen={handleClickOpen}
                        isUserAuthenticate={isUserAuthenticate}
                    />
                )}
                <LoadingComponent loading={loading} />
                <NotFound visible={!loading && cars.length === 0} />
            </Box>
        </div>
    )
}

export default CarListComponent
